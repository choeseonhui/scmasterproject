package com.scmaster.cheesemap.dao;

import java.util.ArrayList;

import com.scmaster.cheesemap.vo.BoardTag;
import com.scmaster.cheesemap.vo.Member;
import com.scmaster.cheesemap.vo.MymapTag;

public interface SearchMapper {
	
	public ArrayList<Member> searchUser(String word);
	public ArrayList<BoardTag> searchTag(String word);
	public ArrayList<MymapTag> searchmymapTag(String word);

}
