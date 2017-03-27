package com.scmaster.cheesemap.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.scmaster.cheesemap.dao.MyMenuDAO;
import com.scmaster.cheesemap.dao.memberDAO;

@Controller
public class BoardController {

	@Autowired
	private MyMenuDAO myMenuDao;
	
	
}
