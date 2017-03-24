package com.scmaster.cheesemap.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.scmaster.cheesemap.dao.memberDAO;
import com.scmaster.cheesemap.vo.Member;

@Controller
public class MemberLoginController {
	private static final Logger logger = LoggerFactory.getLogger(MemberLoginController.class);

	@Autowired
	private memberDAO memberdao;

	@RequestMapping(value="loginCheck", method= RequestMethod.POST)
	public String loginCheck(HttpServletRequest request,HttpSession session,Model model){
		
		String id =request.getParameter("id");
		String password  = request.getParameter("password");
		
		/*Member member = memberdao.searchMember(id);
		*/
		
		Member member = new Member();
		
		member.setMem_id("sss");
		member.setMem_pw("sss");
		
		
     /*      if(member== null){
			
			model.addAttribute("loginErr", "notMember");
			
			
		return "home";	
		}
           
           else{*/
			
			if(member.getMem_pw().equals(password)){
				session.setAttribute("id", member.getMem_id());
				session.setAttribute("nickname",member.getMem_nickname());
				System.out.println("ssss");
				return "main";
				
			}else{
				
				System.out.println("aaa");
				model.addAttribute("loginErr", "passwordErr");
				return "home";
				
			}

		
}
	}

	
