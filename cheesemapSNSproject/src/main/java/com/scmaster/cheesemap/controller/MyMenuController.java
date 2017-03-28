package com.scmaster.cheesemap.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.scmaster.cheesemap.dao.MyMenuDAO;
import com.scmaster.cheesemap.vo.MyMenu;

@Controller
public class MyMenuController {
	
	@Autowired
	private MyMenuDAO myMenuDao;
	
	@ResponseBody
	@RequestMapping(value = "mymenu", method = RequestMethod.POST)
	public MyMenu getMyMenu(String mem_id) {
		MyMenu result = myMenuDao.getMyMenu(mem_id);
		return result;
	}
}
