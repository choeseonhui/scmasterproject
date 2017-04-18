package com.scmaster.cheesemap.controller;

import java.util.ArrayList;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.google.gson.Gson;
import com.scmaster.cheesemap.dao.MakeBookDAO;
import com.scmaster.cheesemap.vo.Board;

@Controller
public class MakeBookController {
	
	@Autowired
	private MakeBookDAO makeBookDAO;
	
	@RequestMapping(value = "makebook", method = RequestMethod.GET)
	public String bookmake(HttpSession session) {
		String mem_id = (String) session.getAttribute("mem_id");
		
		if(mem_id != null) {
			ArrayList<Board> myBoard = makeBookDAO.getMyBoard(mem_id);
			Gson gson = new Gson();
			session.setAttribute("myBoard", gson.toJson(myBoard));
			return "makebook";
		}
		
		return "home";
	}
	
}
