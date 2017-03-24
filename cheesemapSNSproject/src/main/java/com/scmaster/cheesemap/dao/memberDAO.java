package com.scmaster.cheesemap.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.scmaster.cheesemap.vo.Member;

@Repository
public class memberDAO implements Mapper {
	
	
	
	@Autowired
	private SqlSession sqlsession;

	@Override
	public int joinMember(Member member) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public Member searchMember(String id) {
		// TODO Auto-generated method stub
		return null;
	}	
	
	

}
