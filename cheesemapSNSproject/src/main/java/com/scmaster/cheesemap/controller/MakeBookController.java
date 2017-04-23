package com.scmaster.cheesemap.controller;

import java.util.ArrayList;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.scmaster.cheesemap.dao.MakeBookDAO;
import com.scmaster.cheesemap.dao.TimelineDAO;
import com.scmaster.cheesemap.vo.BestLike;
import com.scmaster.cheesemap.vo.Board;
import com.scmaster.cheesemap.vo.Member;
import com.scmaster.cheesemap.vo.Timeline;

@Controller
public class MakeBookController {

	@Autowired
	private MakeBookDAO makeBookDAO;

	@Autowired
	private TimelineDAO timelineDAO;

	@RequestMapping(value = "makebook", method = RequestMethod.GET)
	public String bookmake(HttpSession session) {
		String mem_id = (String) session.getAttribute("mem_id");

		/*
		 * if(mem_id != null) { ArrayList<Board> myBoard =
		 * makeBookDAO.getMyBoard(mem_id); Gson gson = new Gson();
		 * session.setAttribute("myBoard", gson.toJson(myBoard)); return
		 * "makebook"; }
		 */

		return "makebook";
	}

	@ResponseBody
	@RequestMapping(value = "first", method = RequestMethod.GET)
	public ArrayList<Board> first(String fromDate, String toDate) {
		System.out.println(toDate);
		ArrayList<Board> myBoard = makeBookDAO.getMyBoardfromDatetoDate(fromDate, toDate);

		/*
		 * Gson gson = new Gson(); gson.toJson(myBoard);
		 */
		return myBoard;

	}

	@ResponseBody
	@RequestMapping(value = "selectedBoardList", method = RequestMethod.POST)
	public ArrayList<Timeline> selectedBoardList(String[] select_img) {
		ArrayList<Timeline> result = new ArrayList<>();
		if (select_img != null) {
			for (String boa_id : select_img) {
				Timeline temp = new Timeline();

				Board timelineBoard = timelineDAO.getTimeline(boa_id);

				temp.setBoard(timelineBoard);
				temp.setBoardComment(timelineDAO.getBoardComment(boa_id));
				temp.setBoardTag(timelineDAO.getBoardTag(boa_id));
				temp.setBoardLike(timelineDAO.getBoardLike(boa_id));
				result.add(temp);
			}
		}
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "bestOfLike", method = RequestMethod.POST)
	public ArrayList<Member> bestOfLike(@RequestBody BestLike bLike) {
		ArrayList<Member> result = new ArrayList<>();
		if (bLike.getSelect_img() != null) {
			result = makeBookDAO.bestOfLike(bLike);
		}
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "bestOfBoard", method = RequestMethod.POST)
	public ArrayList<String> bestOfBoard(String[] select_img) {
		ArrayList<String> result = new ArrayList<>();

		result = makeBookDAO.bestOfBoard(select_img);

		return result;
	}
}
