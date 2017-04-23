package com.scmaster.cheesemap.controller;

import java.util.ArrayList;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.scmaster.cheesemap.dao.FollowDAO;
import com.scmaster.cheesemap.vo.Member;

@Controller
public class FollowContoller {
	
	@Autowired
	private FollowDAO dao;
	
	@ResponseBody
	@RequestMapping(value = "clickFollower", method = RequestMethod.POST)
	public ArrayList<Member> clickFollower(HttpSession session) {
		String mem_id = (String) session.getAttribute("mem_id");
		ArrayList<Member> result = dao.clickFollower(mem_id);
		return result;
	}
}
