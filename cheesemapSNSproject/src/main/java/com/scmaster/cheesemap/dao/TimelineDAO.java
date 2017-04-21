package com.scmaster.cheesemap.dao;

import java.util.ArrayList;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.scmaster.cheesemap.vo.Board;
import com.scmaster.cheesemap.vo.BoardComment;
import com.scmaster.cheesemap.vo.BoardLike;
import com.scmaster.cheesemap.vo.BoardTag;

@Repository
public class TimelineDAO implements TimelineMapper {

	@Autowired
	private SqlSession sqlsession;
	
	public Board getTimeline(String boa_id) {
		TimelineMapper mapper = sqlsession.getMapper(TimelineMapper.class);
		return mapper.getTimeline(boa_id);
	}
	
	public ArrayList<BoardComment> getBoardComment(String boa_id) {
		TimelineMapper mapper = sqlsession.getMapper(TimelineMapper.class);
		return mapper.getBoardComment(boa_id);
	}

	public ArrayList<BoardTag> getBoardTag(String boa_id) {
		TimelineMapper mapper = sqlsession.getMapper(TimelineMapper.class);
		return mapper.getBoardTag(boa_id);
	}
	
	public ArrayList<BoardLike> getBoardLike(String boa_id) {
		TimelineMapper mapper = sqlsession.getMapper(TimelineMapper.class);
		return mapper.getBoardLike(boa_id);
	}
	
	public String followCheck(String mem_id) {
		TimelineMapper mapper = sqlsession.getMapper(TimelineMapper.class);
		return mapper.followCheck(mem_id);
	}
}
