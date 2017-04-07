package com.scmaster.cheesemap.controller;

import java.util.ArrayList;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.scmaster.cheesemap.dao.SearchDAO;
import com.scmaster.cheesemap.dao.TimelineDAO;
import com.scmaster.cheesemap.vo.Timeline;

@Controller
public class TimelineController {
	
	@Autowired
	private TimelineDAO timelineDAO;
	
	@Autowired
	private SearchDAO searchDAO;
	
	@ResponseBody
	@RequestMapping(value="timeline", method=RequestMethod.GET)
	public ArrayList<Timeline> timeline(HttpSession session) {
		System.out.println("asdfasdf");
		
		ArrayList<String> boa_id_list = new ArrayList<>();
		boa_id_list = (ArrayList<String>) session.getAttribute("boa_id_list");
		System.out.println(boa_id_list);
		ArrayList<Timeline> result = new ArrayList<>();
		for(String boa_id : boa_id_list) {
			Timeline temp = new Timeline();
			temp.setBoard(timelineDAO.getTimeline(boa_id));
			temp.setBoardComment(timelineDAO.getBoardComment(boa_id));
			temp.setBoardTag(timelineDAO.getBoardTag(boa_id));
			temp.setBoardLike(timelineDAO.getBoardLike(boa_id));
			result.add(temp);
			System.out.println(temp);
		}
		return result;
	}
	
	
	

	
	
	@ResponseBody
	@RequestMapping(value="seachResult", method=RequestMethod.GET)
	public void seachResult(String tagName, String userId, String mymapTag,HttpSession session) {
		
		 
		if(tagName != null){
			ArrayList<String> result = searchDAO.resultTag(tagName);
		
						session.setAttribute("boa_id_list", result);
			
		}else if(userId !=null){
			ArrayList<String> result=	searchDAO.resultUser(userId);
			session.setAttribute("boa_id_list", result);
			
			
		}else if(mymapTag !=null){
			ArrayList<String> result = searchDAO.resultMymap(mymapTag);
			session.setAttribute("boa_id_list", result);
			
			
		}
		
	}
}
