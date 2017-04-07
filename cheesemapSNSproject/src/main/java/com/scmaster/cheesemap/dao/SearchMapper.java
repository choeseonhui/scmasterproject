package com.scmaster.cheesemap.dao;

import java.util.ArrayList;

import com.scmaster.cheesemap.vo.Board;
import com.scmaster.cheesemap.vo.BoardTag;
import com.scmaster.cheesemap.vo.Member;
import com.scmaster.cheesemap.vo.MymapTag;

public interface SearchMapper {
	
	public ArrayList<Member> searchUser(String word);
	public ArrayList<BoardTag> searchTag(String word);
	public ArrayList<MymapTag> searchmymapTag(String word);
	public ArrayList<Board> defaultList(String mem_id, String latNE, String lngNE, String latSW, String lngSW);
	
	
	public ArrayList<String> resultTag(String tagName);
	public ArrayList<String> resultUser(String userId);
	public ArrayList<String> resultMymap(String mymapTag);
}
