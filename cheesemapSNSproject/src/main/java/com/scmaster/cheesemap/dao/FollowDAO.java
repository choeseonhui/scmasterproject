package com.scmaster.cheesemap.dao;

import java.util.ArrayList;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.scmaster.cheesemap.vo.Member;

@Repository
public class FollowDAO implements FollowMapper {

	@Autowired
	SqlSession session;

	@Override
	public ArrayList<Member> clickFollower(String mem_id) {
		FollowMapper mapper = session.getMapper(FollowMapper.class);
		return mapper.clickFollower(mem_id);
	}

	@Override
	public ArrayList<Member> clickFollowing(String mem_id) {
		FollowMapper mapper = session.getMapper(FollowMapper.class);
		return mapper.clickFollowing(mem_id);
	}
}
