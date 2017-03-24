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

	public int idCheck(String mem_id) {
		MemberMapper mapper = sqlsession.getMapper(MemberMapper.class);
		int result = mapper.idCheck(mem_id);
		return result;
	}

	public int nicknameCheck(String mem_nickname) {
		MemberMapper mapper = sqlsession.getMapper(MemberMapper.class);
		int result = mapper.nicknameCheck(mem_nickname);
		return result;
	}

}
