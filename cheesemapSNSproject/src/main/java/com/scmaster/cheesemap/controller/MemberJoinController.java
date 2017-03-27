package com.scmaster.cheesemap.controller;

import java.io.IOException;
import java.util.Iterator;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.scmaster.cheesemap.dao.memberDAO;
import com.scmaster.cheesemap.util.FileService;
import com.scmaster.cheesemap.vo.Member;

@Controller
public class MemberJoinController {
	private static final Logger logger = LoggerFactory.getLogger(MemberLoginController.class);

	final String uploadPath = "/memberfile";

	@Autowired
	private memberDAO dao;

	@ResponseBody
	@RequestMapping(value = "idCheck", method = RequestMethod.GET)
	public int idCheck(String mem_id) {
		int result = -1;
		try {
			result = dao.idCheck(mem_id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "nicknameCheck", method = RequestMethod.GET)
	public int nicknameCheck(String mem_nickname) {
		int result = -1;
		try {
			result = dao.nicknameCheck(mem_nickname);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "fileupload", method = RequestMethod.POST)
	public String fileupload(MultipartHttpServletRequest request) {
		Iterator<String> itr = request.getFileNames();
		String fullpath = "";
		if (itr.hasNext()) {
			MultipartFile mpf = request.getFile(itr.next());
			System.out.println(request.getServletContext().getRealPath("/resource/image/"));
			try {
				System.out.println("file length : " + mpf.getBytes().length);
				System.out.println("file name : " + mpf.getOriginalFilename());
				if (!mpf.isEmpty()) {
					String savedfile = FileService.saveFile(mpf,
							request.getServletContext().getRealPath("/resources/image/"));
					fullpath = "./resources/image/" + savedfile;
				}
			} catch (IOException e) {
				System.out.println(e.getMessage());
				e.printStackTrace();
			}
			return fullpath;
		} else {
			return fullpath;
		}
	}

	@RequestMapping(value = "join", method = RequestMethod.POST)
	public String boardWrite(Member mb, MultipartFile upload) {
		// 파일이 있는지 확인
		// 경로만 얻어냄
		if (!upload.isEmpty()) {
			String savedfile = FileService.saveFile(upload, uploadPath);
			mb.setMem_originalfile(upload.getOriginalFilename());
			mb.setMem_savefile(savedfile);
		}
		try {
			dao.join(mb);
		} catch (Exception e) {
			e.printStackTrace();
			return "joinForm";
		}
		return "home";
	}

}
