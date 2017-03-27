package com.scmaster.cheesemap.dao;

import com.scmaster.cheesemap.vo.Member;

public interface Mapper {

	
	
	public int joinMember(Member member);
	public Member searchMember(String id);
	
	
}
