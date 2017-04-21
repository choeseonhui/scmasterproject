package com.scmaster.cheesemap.dao;

import java.util.ArrayList;

import com.scmaster.cheesemap.vo.Board;
import com.scmaster.cheesemap.vo.BoardComment;
import com.scmaster.cheesemap.vo.BoardLike;
import com.scmaster.cheesemap.vo.BoardTag;

public interface TimelineMapper {
	public Board getTimeline(String boa_id);
	public ArrayList<BoardComment> getBoardComment(String boa_id);
	public ArrayList<BoardTag> getBoardTag(String boa_id);
	public ArrayList<BoardLike> getBoardLike(String boa_id);
	public String followCheck(String mem_id);
}
