package com.scmaster.cheesemap.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.scmaster.cheesemap.dao.memberDAO;
import com.scmaster.cheesemap.vo.Member;

@Controller
public class MemberLoginController {

	@Autowired
	private memberDAO memberdao;

	@ResponseBody
	@RequestMapping(value = "loginCheck", method = RequestMethod.POST)
	public Member loginCheck(String mem_id, String mem_pw, HttpSession session) {
		System.out.println(mem_id + "," + mem_pw + "입니다.");

		Member member = memberdao.searchMember(mem_id);
		System.out.println("이게 안되니?");

		System.out.println(member);
		return null;
	}
}