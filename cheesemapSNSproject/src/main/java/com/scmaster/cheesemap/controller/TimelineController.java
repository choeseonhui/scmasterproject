package com.scmaster.cheesemap.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.scmaster.cheesemap.dao.SearchDAO;
import com.scmaster.cheesemap.dao.TimelineDAO;
import com.scmaster.cheesemap.util.convertFromDate;
import com.scmaster.cheesemap.vo.Board;
import com.scmaster.cheesemap.vo.Follow;
import com.scmaster.cheesemap.vo.Timeline;

@Controller
public class TimelineController {

	@Autowired
	private TimelineDAO timelineDAO;

	@Autowired
	private SearchDAO searchDAO;

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
				result.add(temp);
			}
		}
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "seachResult", method = RequestMethod.GET)
	public void seachResult(String tagName, String userId, String mymapTag, HttpSession session) {
		if (tagName != null) {
			ArrayList<String> result = searchDAO.resultTag(tagName);
			session.setAttribute("boa_id_list", result);
		} else if (userId != null) {
			ArrayList<String> result = searchDAO.resultUser(userId);
			session.setAttribute("boa_id_list", result);
		} else if (mymapTag != null) {
			ArrayList<String> result = searchDAO.resultMymap(mymapTag);
			session.setAttribute("boa_id_list", result);
		}
	}

	@ResponseBody
	@RequestMapping(value = "followCheck", method = RequestMethod.GET)
	public String followCheck(String board_id, HttpSession session) {
		String login_id = (String) session.getAttribute("mem_id");
		Follow follow = new Follow(login_id, board_id);
		System.out.println(board_id);
		System.out.println(follow);
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
		System.out.println(boa_id);
		timelineDAO.deleteBoard(boa_id);
	}
}
