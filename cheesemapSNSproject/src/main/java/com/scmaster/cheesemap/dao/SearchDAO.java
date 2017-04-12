package com.scmaster.cheesemap.dao;

import java.util.ArrayList;
import java.util.HashMap;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.scmaster.cheesemap.vo.Board;
import com.scmaster.cheesemap.vo.BoardTag;
import com.scmaster.cheesemap.vo.Member;
import com.scmaster.cheesemap.vo.MymapTag;

@Repository
public class SearchDAO implements SearchMapper {	
	
	@Autowired
	private SqlSession sqlsession;

		
	@Override
	public ArrayList<Member> searchUser(String word) {
		SearchMapper mapper = sqlsession.getMapper(SearchMapper.class);
		System.out.println("dao");
		ArrayList<Member> list = mapper.searchUser(word) ;			
		return list;
	}


	@Override
	public ArrayList<HashMap<String, Object>> searchTag(String word) {
		SearchMapper mapper = sqlsession.getMapper(SearchMapper.class);
		
		ArrayList<HashMap<String, Object>> list = mapper.searchTag(word);	
		System.out.println(list);
		return list;
	}

	@Override
	public ArrayList<MymapTag> searchmymapTag(String word) {
		SearchMapper mapper = sqlsession.getMapper(SearchMapper.class);
	
		ArrayList<MymapTag> list = mapper.searchmymapTag(word);			
		return list;
	}

	@Override
	public ArrayList<Board> defaultList(String mem_id, String latNE, String lngNE, String latSW, String lngSW) {
		// TODO Auto-generated method stub
		SearchMapper mapper = sqlsession.getMapper(SearchMapper.class);
		ArrayList<Board> mylist = mapper.defaultList(mem_id, latNE, lngNE, latSW, lngSW);
		return mylist;
	}
	
	
	@Override
	public ArrayList<String> resultTag(String tagName) {
		SearchMapper mapper = sqlsession.getMapper(SearchMapper.class);
		ArrayList<String> result  = mapper.resultTag(tagName);
		return result;
	}


	@Override
	public ArrayList<String> resultUser(String userId) {
		SearchMapper mapper = sqlsession.getMapper(SearchMapper.class);
		ArrayList<String> result = mapper.resultUser(userId);
		return result;
	}


	@Override
	public ArrayList<String> resultMymap(String mymapTag) {
		SearchMapper mapper = sqlsession.getMapper(SearchMapper.class);
		ArrayList<String> result = mapper.resultMymap(mymapTag);
		return result;
	}


	@Override
	public ArrayList<String> autocomplete(String input) {

		SearchMapper mapper = sqlsession.getMapper(SearchMapper.class);   
		ArrayList<String> list = mapper.autocomplete(input);			
			return list;
	
	}
	
}
