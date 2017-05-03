package com.scmaster.cheesemap.dao;

import java.util.ArrayList;
import java.util.HashMap;

import com.scmaster.cheesemap.vo.Board;
import com.scmaster.cheesemap.vo.BoardTag;
import com.scmaster.cheesemap.vo.Member;
import com.scmaster.cheesemap.vo.MymapTag;

public interface SearchMapper {
	
	public ArrayList<Member> searchUser(String word);
	public ArrayList<HashMap<String, Object>> searchTag(String word); 
	public ArrayList<HashMap<String, Object>> searchmymapTag(String word);
	public ArrayList<Board> defaultList(String mem_id, String latNE, String lngNE, String latSW, String lngSW);
	public ArrayList<String> resultTag(String tagName);
	public ArrayList<String> resultUser(String userId);
	public String[] resultMymap(String mymapTag);
	public ArrayList<String> resultCart(String mem_id);
	public ArrayList<String> autocomplete(String input);
		
}
