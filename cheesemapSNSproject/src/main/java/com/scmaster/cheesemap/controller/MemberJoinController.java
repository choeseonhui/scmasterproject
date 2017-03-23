package com.scmaster.cheesemap.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MemberJoinController {
	private static final Logger logger = LoggerFactory.getLogger(MemberLoginController.class);
	
	@ResponseBody
	@RequestMapping(value = "joinBtnClick", method=RequestMethod.GET)
	public void joinBtnClick() {
		
	}
	
}
