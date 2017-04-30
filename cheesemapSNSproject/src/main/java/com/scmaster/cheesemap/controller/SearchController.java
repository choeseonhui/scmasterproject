package com.scmaster.cheesemap.controller;

import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.scmaster.cheesemap.dao.SearchDAO;
import com.scmaster.cheesemap.vo.Board;
import com.scmaster.cheesemap.vo.BoardTag;
import com.scmaster.cheesemap.vo.Member;
import com.scmaster.cheesemap.vo.MyMenu;
import com.scmaster.cheesemap.vo.MymapTag;

@Controller
public class SearchController {

	@Autowired
	private SearchDAO dao;

	@ResponseBody
	@RequestMapping(value = "search", method = RequestMethod.GET)
	public HashMap<String, Object> search(String word) {
		HashMap<String, Object> map = new HashMap<>();
		ArrayList<Member> memberlist = dao.searchUser(word);
		ArrayList<HashMap<String, Object>> taglist = dao.searchTag(word);
		ArrayList<HashMap<String, Object>> mymaplist = dao.searchmymapTag(word);
		map.put("memberList", memberlist);
		map.put("tagList", taglist);
		map.put("mymapList", mymaplist);
		return map;
	}

	@ResponseBody
	@RequestMapping(value = "defaultList", method = RequestMethod.POST)
	public ArrayList<Board> defaultList(HttpSession session, String latNE, String lngNE, String latSW, String lngSW) {
		ArrayList<Board> mylist = null;
		ArrayList<String> boa_id_list = new ArrayList<>();
		String mem_id = (String) session.getAttribute("mem_id");
		mylist = dao.defaultList(mem_id, latNE, lngNE, latSW, lngSW);
		for (Board board : mylist) {
			boa_id_list.add(board.getBoa_id());
		}
		session.removeAttribute("boa_id_list");
		session.setAttribute("boa_id_list", boa_id_list);
		return mylist;
	}

	@ResponseBody
	@RequestMapping(value = "autocomplete", method = RequestMethod.GET)
	public ArrayList<String> autocomplete(@RequestParam("input") String input) {
		ArrayList<String> list = new ArrayList<>();
		if (input != null) {
			list = dao.autocomplete(input);
		}
		return list;
	}
}
