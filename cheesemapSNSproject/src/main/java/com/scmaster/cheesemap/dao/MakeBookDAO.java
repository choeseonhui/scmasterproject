package com.scmaster.cheesemap.dao;

import java.util.ArrayList;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.scmaster.cheesemap.vo.BestLike;
import com.scmaster.cheesemap.vo.Board;
import com.scmaster.cheesemap.vo.Member;

@Repository
public class MakeBookDAO implements MakeBookMapper {
	
	@Autowired
    SqlSession session;
	
	public ArrayList<Board> getMyBoard(String mem_id) {
		MakeBookMapper mapper = session.getMapper(MakeBookMapper.class);
		ArrayList<Board> result = mapper.getMyBoard(mem_id);
		return result;
	}
	
	@Override
	public ArrayList<Board> getMyBoardfromDatetoDate(String fromDate, String toDate) {
		MakeBookMapper mapper = session.getMapper(MakeBookMapper.class);
		ArrayList<Board> result = mapper.getMyBoardfromDatetoDate(fromDate, toDate);
		return result;
	}
	
	@Override
	public ArrayList<Member> bestOfLike(BestLike bLike) {
		// TODO Auto-generated method stub
		MakeBookMapper mapper = session.getMapper(MakeBookMapper.class);
		ArrayList<Member> result = mapper.bestOfLike(bLike);
		return result;
	}

	@Override
	public String[] bestOfBoard(String[] select_img) {
		// TODO Auto-generated method stub
		MakeBookMapper mapper = session.getMapper(MakeBookMapper.class);
		String[] result = mapper.bestOfBoard(select_img);
		return result;
	}

}
