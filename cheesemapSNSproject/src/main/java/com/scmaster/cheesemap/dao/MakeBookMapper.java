package com.scmaster.cheesemap.dao;

import java.util.ArrayList;

import com.scmaster.cheesemap.vo.BestLike;
import com.scmaster.cheesemap.vo.Board;
import com.scmaster.cheesemap.vo.Member;

public interface MakeBookMapper {
	public ArrayList<Board> getMyBoard(String mem_id);
	public ArrayList<Board> getMyBoardfromDatetoDate(String fromDate,String toDate);
	public ArrayList<Member> bestOfLike(BestLike bLike);
	public ArrayList<String> bestOfBoard(String[] select_img);
}
