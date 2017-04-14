package com.scmaster.cheesemap.dao;

import java.util.ArrayList;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.scmaster.cheesemap.vo.Board;

@Repository
public class MakeBookDAO implements MakeBookMapper {
	
	@Autowired
    SqlSession session;
	
	public ArrayList<Board> getMyBoard(String mem_id) {
		MakeBookMapper mapper = session.getMapper(MakeBookMapper.class);
		ArrayList<Board> result = mapper.getMyBoard(mem_id);
		return result;
	}
}
