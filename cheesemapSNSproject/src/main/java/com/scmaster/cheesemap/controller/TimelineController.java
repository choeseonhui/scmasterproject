package com.scmaster.cheesemap.controller;

import java.util.ArrayList;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.scmaster.cheesemap.dao.TimelineDAO;
import com.scmaster.cheesemap.vo.Timeline;

@Controller
public class TimelineController {
	
	@Autowired
	private TimelineDAO timelineDAO;
	
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
}
