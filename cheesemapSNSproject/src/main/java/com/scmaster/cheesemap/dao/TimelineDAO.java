package com.scmaster.cheesemap.dao;

import java.util.ArrayList;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.scmaster.cheesemap.vo.Board;
import com.scmaster.cheesemap.vo.BoardComment;
import com.scmaster.cheesemap.vo.BoardLike;
import com.scmaster.cheesemap.vo.BoardTag;
import com.scmaster.cheesemap.vo.Follow;

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
	
	public String followCheck(Follow follow) {
		TimelineMapper mapper = sqlsession.getMapper(TimelineMapper.class);
		return mapper.followCheck(follow);
	}
	
	public void followAdd(Follow follow) {
		TimelineMapper mapper = sqlsession.getMapper(TimelineMapper.class);
		mapper.followAdd(follow);
	}
	
	public void followRemove(Follow follow) {
		TimelineMapper mapper = sqlsession.getMapper(TimelineMapper.class);
		mapper.followRemove(follow);
	}
	
	public void deleteBoard(String boa_id) {
		TimelineMapper mapper = sqlsession.getMapper(TimelineMapper.class);
		mapper.deleteBoard(boa_id);
		mapper.deleteBoardTag(boa_id);
	}
	
	public void deleteBoardTag(String boa_id) {
		TimelineMapper mapper = sqlsession.getMapper(TimelineMapper.class);
		mapper.deleteBoardTag(boa_id);
	}
}
