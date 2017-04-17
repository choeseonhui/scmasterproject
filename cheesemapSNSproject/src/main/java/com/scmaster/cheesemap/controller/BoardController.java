package com.scmaster.cheesemap.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.scmaster.cheesemap.dao.BoardDAO;
import com.scmaster.cheesemap.dao.TimelineDAO;
import com.scmaster.cheesemap.vo.Board;
import com.scmaster.cheesemap.vo.BoardComment;
import com.scmaster.cheesemap.vo.BoardLike;
import com.scmaster.cheesemap.vo.BoardTag;

@Controller
public class BoardController {

	@Autowired
	private BoardDAO dao;

	@Autowired
	private TimelineDAO daoT;

	@ResponseBody
	@RequestMapping(value = "boardSave", method = RequestMethod.POST)
	public int boardSave(Board board, HttpSession session, String tag_name) {
		String mem_id = (String) session.getAttribute("mem_id");
		board.setMem_id(mem_id);
		int result = dao.boardSave(board);
		String test = tag_name.substring(1);
		String tag_name_list[] = test.split("#");
		ArrayList<String> list = new ArrayList<String>(Arrays.asList(tag_name_list));
		int result2 = 0;
		for (String tags : list) {
			BoardTag tag = new BoardTag(tags, board.getBoa_id());
			result2 += dao.tagSave(tag);
		}
		int result3 = result + result2;
		return result3;
	}

	@RequestMapping(value = "boardWrite", method = RequestMethod.GET)
	public String boardWrite(String lat, String lng, Model model) {
		model.addAttribute("lat", lat);
		model.addAttribute("lng", lng);
		return "boardWrite";
	}

	@ResponseBody
	@RequestMapping(value = "boardRead", method = RequestMethod.POST)
	public Board boardRead(String boa_id) {
		Board result = dao.boardRead(boa_id);
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "replyWrite", method = RequestMethod.POST)
	public int replyWrite(BoardComment bComment) {
		int result = dao.replyWrite(bComment);
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "getBoaCommentNick", method = RequestMethod.GET)
	public ArrayList<HashMap<String, Object>> getBoaCommentNick(String boa_id) {
		ArrayList<HashMap<String, Object>> replyList = null;
		replyList = dao.getBoaCommentNick(boa_id);
		return replyList;
	}

	@ResponseBody
	@RequestMapping(value = "getBoardLike", method = RequestMethod.GET)
	public ArrayList<BoardLike> getBoardLike(String boa_id) {
		ArrayList<BoardLike> likeList = null;
		likeList = daoT.getBoardLike(boa_id);
		return likeList;
	}

	@ResponseBody
	@RequestMapping(value = "likeupdate", method = RequestMethod.GET)
	public int likeupdate(BoardLike bLike, int flag) {
		int result = 0;
		if (flag == 1) {
			result = dao.likeInsert(bLike);
		} else {
			result = dao.likeDelete(bLike);
		}
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "delReply", method = RequestMethod.GET)
	public int delReply(String com_id) {
		int result = 0;
		result = dao.delReply(com_id);
		return result;
	}
}
