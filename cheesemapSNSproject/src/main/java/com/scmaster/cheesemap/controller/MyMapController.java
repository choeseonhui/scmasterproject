package com.scmaster.cheesemap.controller;

import java.util.ArrayList;
import java.util.Arrays;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.scmaster.cheesemap.dao.MyMapDAO;
import com.scmaster.cheesemap.vo.Board;
import com.scmaster.cheesemap.vo.MyMyMy;
import com.scmaster.cheesemap.vo.MymapTag;

@Controller
public class MyMapController {

	@Autowired
	MyMapDAO dao;

	@ResponseBody
	@RequestMapping(value = "setMarkerList", method = RequestMethod.POST)
	public ArrayList<Board> setMarkerList(String[] selectedMarker) {
		ArrayList<Board> result = new ArrayList<Board>();
		result = dao.setMarkerList(selectedMarker);
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "makeMyMap", method = RequestMethod.POST)
	public int makeMyMap(@RequestBody MyMyMy mymymy, HttpSession session) {
		int result = 0;
		String newMapID = dao.newMapID();
		String tag = mymymy.getHashtagMap();
		String test = tag.substring(1);
		String[] tagList = test.split("#");
		ArrayList<String> tag_name = new ArrayList<String>(Arrays.asList(tagList));
		MymapTag myMapTag = new MymapTag();
		myMapTag.setTag_name_list(tag_name);
		myMapTag.setMap_id(newMapID);
		if (newMapID != null) {
			String mem_id = (String) session.getAttribute("mem_id");
			mymymy.setMem_id(mem_id);
			mymymy.setMap_id(newMapID);
			int result1 = dao.makeMyMap(mymymy);
			if (result1 == 1) {
				int result2 = dao.makeMyMapTag(myMapTag);
				if (result2 > 0) {
					result = dao.makeMyMapToBoard(mymymy);
				}
			}
		}
		return result;
	}
}
