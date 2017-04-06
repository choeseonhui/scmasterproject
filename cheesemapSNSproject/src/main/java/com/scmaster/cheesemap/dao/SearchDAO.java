package com.scmaster.cheesemap.dao;

import java.util.ArrayList;

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
	public ArrayList<BoardTag> searchTag(String word) {
		SearchMapper mapper = sqlsession.getMapper(SearchMapper.class);
		
		ArrayList<BoardTag> list = mapper.searchTag(word);		
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
}
