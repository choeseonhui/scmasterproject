package com.scmaster.cheesemap.dao;

import java.util.ArrayList;

import com.scmaster.cheesemap.vo.Board;

public interface MakeBookMapper {
	public ArrayList<Board> getMyBoard(String mem_id);
	public ArrayList<Board> getMyBoardfromDatetoDate(String fromDate,String toDate);
}
