package com.scmaster.cheesemap.dao;

import java.util.ArrayList;
import java.util.HashMap;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.scmaster.cheesemap.vo.Board;
import com.scmaster.cheesemap.vo.BoardComment;
import com.scmaster.cheesemap.vo.BoardLike;
import com.scmaster.cheesemap.vo.BoardTag;

@Repository
public class BoardDAO {

	public BoardMapper mapper;

	@Autowired
	SqlSession session;

	public int boardSave(Board board) {
		mapper = session.getMapper(BoardMapper.class);
		int result = mapper.boardSave(board);
		return result;
	}

	public int tagSave(BoardTag boardTag) {
		mapper = session.getMapper(BoardMapper.class);
		int result = mapper.tagSave(boardTag);
		return result;
	}

	public Board boardRead(String boa_id) {
		mapper = session.getMapper(BoardMapper.class);
		Board result = mapper.boardRead(boa_id);
		return result;
	}

	public int replyWrite(BoardComment bComment) {
		mapper = session.getMapper(BoardMapper.class);
		int result = mapper.replyWrite(bComment);
		return result;
	}

	public int delReply(String com_id) {
		// TODO Auto-generated method stub
		mapper = session.getMapper(BoardMapper.class);
		return mapper.delReply(com_id);
	}

	public ArrayList<HashMap<String, Object>> getBoaCommentNick(String boa_id) {
		mapper = session.getMapper(BoardMapper.class);
		return mapper.getBoaCommentNick(boa_id);
	}

	public int likeInsert(BoardLike bLike) {
		mapper = session.getMapper(BoardMapper.class);
		return mapper.likeInsert(bLike);
	}

	public int likeDelete(BoardLike bLike) {
		mapper = session.getMapper(BoardMapper.class);
		return mapper.likeDelete(bLike);
	}

}
