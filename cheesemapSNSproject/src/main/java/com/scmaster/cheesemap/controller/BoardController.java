package com.scmaster.cheesemap.controller;

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
	public int boardSave(Board board) {
		System.out.println(board);
		board.setMem_id("123");
		int result = dao.boardSave(board);
		System.out.println(result);
		return result;
	}

	@RequestMapping(value = "boardWrite", method = RequestMethod.GET)
	public String boardWrite(String lat, String lng, Model model) {
		model.addAttribute("lat", lat);
		model.addAttribute("lng", lng);
		return "boardWrite";
	}

}
