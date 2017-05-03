package com.scmaster.cheesemap.dao;

import java.util.ArrayList;
import java.util.HashMap;

import com.scmaster.cheesemap.vo.Board;
import com.scmaster.cheesemap.vo.BoardComment;
import com.scmaster.cheesemap.vo.BoardLike;
import com.scmaster.cheesemap.vo.BoardTag;

public interface BoardMapper {

	public int boardSave(Board Board);
	public int tagSave(BoardTag boardTag);
	public Board boardRead(String boa_id);
	public int replyWrite(BoardComment bComment);
	public int likeInsert(BoardLike bLike);
	public ArrayList<HashMap<String, Object>> getBoaCommentNick(String boa_id);
	public int likeDelete(BoardLike bLike);
	public int delReply(String com_id);

}
