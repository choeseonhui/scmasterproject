package com.scmaster.cheesemap.dao;

import java.util.ArrayList;

import com.scmaster.cheesemap.vo.Member;

public interface FollowMapper {
	public ArrayList<Member> clickFollower(String mem_id);
	public ArrayList<Member> clickFollowing(String mem_id);
}
