package com.scmaster.cheesemap.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.scmaster.cheesemap.dao.BoardDAO;
import com.scmaster.cheesemap.dao.SearchDAO;
import com.scmaster.cheesemap.dao.TimelineDAO;
import com.scmaster.cheesemap.util.convertFromDate;
import com.scmaster.cheesemap.vo.Board;
import com.scmaster.cheesemap.vo.Follow;
import com.scmaster.cheesemap.vo.MapToBoard;
import com.scmaster.cheesemap.vo.MyMap;
import com.scmaster.cheesemap.vo.Timeline;

@Controller
public class TimelineController {

	@Autowired
	private TimelineDAO timelineDAO;

	@Autowired
	private SearchDAO searchDAO;
	
	@Autowired
	private BoardDAO baordDAO;

	@SuppressWarnings("unchecked")
	@ResponseBody
	@RequestMapping(value = "timeline", method = RequestMethod.GET)
	public ArrayList<Timeline> timeline(HttpSession session) throws ParseException {

		ArrayList<String> boa_id_list = new ArrayList<>();
		boa_id_list = (ArrayList<String>) session.getAttribute("boa_id_list");
		ArrayList<Timeline> result = new ArrayList<>();
		if (boa_id_list != null) {
			for (String boa_id : boa_id_list) {
				Timeline temp = new Timeline();

				Board timelineBoard = timelineDAO.getTimeline(boa_id);
				if(timelineBoard != null) {
					String orignDate = timelineBoard.getBoa_create_date();
					SimpleDateFormat transFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	
					Date dateFrom = transFormat.parse(orignDate);
	
					convertFromDate convert = new convertFromDate();
					String updateDate = convert.calculateTime(dateFrom);
					timelineBoard.setBoa_create_date(updateDate);
					temp.setBoard(timelineBoard);
					temp.setBoardComment(timelineDAO.getBoardComment(boa_id));
					temp.setBoardTag(timelineDAO.getBoardTag(boa_id));
					temp.setBoardLike(timelineDAO.getBoardLike(boa_id));
					temp.setBoardCommentNick(baordDAO.getBoaCommentNick(boa_id));
					result.add(temp);
				}
			}
		}
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "seachResult", method = RequestMethod.GET)
	public void seachResult(String tagName, String userId, String mymapTag, HttpSession session) {
		if (tagName != null) {
			ArrayList<String> result = searchDAO.resultTag(tagName);
			System.out.println(result);
			session.setAttribute("boa_id_list", result);
		} else if (userId != null) {
			ArrayList<String> result = searchDAO.resultUser(userId);
			session.setAttribute("boa_id_list", result);
		} else if (mymapTag != null) {
			String[] result = searchDAO.resultMymap(mymapTag);
			session.setAttribute("map_id_list", result);
		}
	}

	@ResponseBody
	@RequestMapping(value = "followCheck", method = RequestMethod.GET)
	public String followCheck(String board_id, HttpSession session) {
		String login_id = (String) session.getAttribute("mem_id");
		Follow follow = new Follow(login_id, board_id);
		if(board_id.equals(login_id)) {
			return "i";
		}
		String state = timelineDAO.followCheck(follow);
		
		if(state != null) {
			return "ing";
		} else {
			return "yet";
		}
	}
	
	@ResponseBody
	@RequestMapping(value = "followCheck2", method = RequestMethod.GET)
	public String followCheck2(String board_id, HttpSession session) {
		String login_id = (String) session.getAttribute("mem_id");
		Follow follow = new Follow(login_id, board_id);
		System.out.println("22: "+follow);
		String state = timelineDAO.followCheck(follow);
		System.out.println(state);
		return state;
	}
	
	@ResponseBody
	@RequestMapping(value = "followAdd", method = RequestMethod.GET)
	public void followAdd(String board_id, HttpSession session) {
		String login_id = (String) session.getAttribute("mem_id");
		Follow follow = new Follow(login_id, board_id);
		timelineDAO.followAdd(follow);
	}
	
	@ResponseBody
	@RequestMapping(value = "followRemove", method = RequestMethod.GET)
	public void followRemove(String board_id, HttpSession session) {
		String login_id = (String) session.getAttribute("mem_id");
		Follow follow = new Follow(login_id, board_id);
		timelineDAO.followRemove(follow);
	}
	
	@ResponseBody
	@RequestMapping(value = "deleteBoard", method = RequestMethod.GET)
	public void deleteBoard(String boa_id) {
		timelineDAO.deleteBoard(boa_id);
		timelineDAO.deleteBoardTag(boa_id);
	}

	@SuppressWarnings("unchecked")
	@ResponseBody
	@RequestMapping(value = "timelineMap", method = RequestMethod.GET)
	public ArrayList<MyMap> timelineMap(HttpSession session) throws ParseException {

		String[] map_id_list;
		map_id_list = (String[]) session.getAttribute("map_id_list");
		ArrayList<MyMap> mymapList = new ArrayList<>();
		if (map_id_list != null) {
			mymapList = timelineDAO.getTimelineMap(map_id_list);
			if(mymapList != null) {
				for(MyMap mymap : mymapList){
					String orignDate = mymap.getMap_create_date();
					SimpleDateFormat transFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
					Date dateFrom = transFormat.parse(orignDate);
					convertFromDate convert = new convertFromDate();
					String updateDate = convert.calculateTime(dateFrom);
					mymap.setMap_create_date(updateDate);
					
					String tag=mymap.getMap_tag();
					String[] tagList = tag.split("~");
					ArrayList<String> map_tag_list = new ArrayList<String>(Arrays.asList(tagList));
					mymap.setMap_tag_list(map_tag_list);
				}
			}
		}
		return mymapList;
	}
	
	@ResponseBody
	@RequestMapping(value = "getBoardListByMapID", method = RequestMethod.GET)
	public ArrayList<MapToBoard> getBoardListByMapID(String map_id, HttpSession session) {
			ArrayList<MapToBoard> result = timelineDAO.getBoardListByMapID(map_id);
			
			ArrayList<String> boaList=new ArrayList<>();
			for(MapToBoard item : result){
				boaList.add(item.getBoa_id());
			}
			session.setAttribute("boa_id_list", boaList);
			
			return result;
	}
	
}
