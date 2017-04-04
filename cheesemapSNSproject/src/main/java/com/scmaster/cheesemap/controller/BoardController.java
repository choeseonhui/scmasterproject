package com.scmaster.cheesemap.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.scmaster.cheesemap.dao.BoardDAO;
import com.scmaster.cheesemap.vo.Board;

@Controller
public class BoardController {

	@Autowired
	private BoardDAO dao;

	@ResponseBody
	@RequestMapping(value = "boardSave", method = RequestMethod.POST)
	public int boardSave(Board board, HttpSession session) {
		String mem_id = (String) session.getAttribute("mem_id");
		System.out.println(mem_id);
		board.setMem_id(mem_id);
		
		int result = dao.boardSave(board);
		return result;
	}

	@RequestMapping(value = "boardWrite", method = RequestMethod.GET)
	public String boardWrite(String lat, String lng, Model model) {
		model.addAttribute("lat", lat);
		model.addAttribute("lng", lng);
		return "boardWrite";
	}

}
