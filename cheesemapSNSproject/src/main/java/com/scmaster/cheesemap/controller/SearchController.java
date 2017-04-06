package com.scmaster.cheesemap.controller;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.scmaster.cheesemap.dao.SearchDAO;
import com.scmaster.cheesemap.vo.BoardTag;
import com.scmaster.cheesemap.vo.Member;
import com.scmaster.cheesemap.vo.MyMenu;
import com.scmaster.cheesemap.vo.MymapTag;

@Controller
public class SearchController {

	@Autowired
	private SearchDAO dao;

	@ResponseBody
	@RequestMapping(value = "search", method =RequestMethod.GET)
	public HashMap<String, Object> search(String word) {
		System.out.println(word);
		HashMap<String, Object> map = new HashMap<>();
		
		
		ArrayList<Member> memberlist= dao.searchUser(word);
		ArrayList<BoardTag> taglist = dao.searchTag(word);
		ArrayList<MymapTag> mymaplist = dao.searchmymapTag(word);
		map.put("memberList", memberlist);
		map.put("tagList", taglist);
		map.put("mymapList", mymaplist);
		System.out.println("aaa");
		
		return map;
	}

}
