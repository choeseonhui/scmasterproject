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
		ArrayList<Member> list = mapper.searchUser(word);
		return list;
	}

	@Override
	public ArrayList<HashMap<String, Object>> searchTag(String word) {
		SearchMapper mapper = sqlsession.getMapper(SearchMapper.class);
		ArrayList<HashMap<String, Object>> list = mapper.searchTag(word);
		return list;
	}

	@Override
	public ArrayList<HashMap<String, Object>> searchmymapTag(String word) {
		SearchMapper mapper = sqlsession.getMapper(SearchMapper.class);
		ArrayList<HashMap<String, Object>> list = mapper.searchmymapTag(word);
		return list;
	}

	@Override
	public ArrayList<Board> defaultList(String mem_id, String latNE, String lngNE, String latSW, String lngSW) {
		SearchMapper mapper = sqlsession.getMapper(SearchMapper.class);
		ArrayList<Board> mylist = mapper.defaultList(mem_id, latNE, lngNE, latSW, lngSW);
		return mylist;
	}

	@Override
	public ArrayList<String> resultTag(String tagName) {
		SearchMapper mapper = sqlsession.getMapper(SearchMapper.class);
		ArrayList<String> result = mapper.resultTag(tagName);
		return result;
	}

	@Override
	public ArrayList<String> resultUser(String userId) {
		SearchMapper mapper = sqlsession.getMapper(SearchMapper.class);
		ArrayList<String> result = mapper.resultUser(userId);
		return result;
	}

	@Override
	public ArrayList<String> resultCart(String mem_id) {
		SearchMapper mapper = sqlsession.getMapper(SearchMapper.class);
		ArrayList<String> result = mapper.resultCart(mem_id);
		System.out.println(result);
		return result;
	}

	@Override
	public String[] resultMymap(String mymapTag) {
		SearchMapper mapper = sqlsession.getMapper(SearchMapper.class);
		String[] result = mapper.resultMymap(mymapTag);
		return result;
	}

	@Override
	public ArrayList<String> autocomplete(String input) {
		SearchMapper mapper = sqlsession.getMapper(SearchMapper.class);
		ArrayList<String> list = mapper.autocomplete(input);
		return list;
	}
}
