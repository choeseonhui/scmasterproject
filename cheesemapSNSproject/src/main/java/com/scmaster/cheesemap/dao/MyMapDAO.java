package com.scmaster.cheesemap.dao;

import java.util.ArrayList;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.scmaster.cheesemap.vo.Board;
import com.scmaster.cheesemap.vo.MyMyMy;
import com.scmaster.cheesemap.vo.MymapTag;

@Repository
public class MyMapDAO implements MyMapMapper {

	public MyMapMapper mapper;

	@Autowired
	private SqlSession sqlsession;

	@Override
	public ArrayList<Board> setMarkerList(String[] selectedMarker) {
		mapper = sqlsession.getMapper(MyMapMapper.class);
		return mapper.setMarkerList(selectedMarker);
	}

	@Override
	public int makeMyMap(MyMyMy mymymy) {
		mapper = sqlsession.getMapper(MyMapMapper.class);
		return mapper.makeMyMap(mymymy);
	}

	@Override
	public String newMapID() {
		mapper = sqlsession.getMapper(MyMapMapper.class);
		return mapper.newMapID();
	}

	@Override
	public int makeMyMapTag(MymapTag myMapTag) {
		mapper = sqlsession.getMapper(MyMapMapper.class);
		return mapper.makeMyMapTag(myMapTag);
	}

	@Override
	public int makeMyMapToBoard(MyMyMy mymymy) {
		mapper = sqlsession.getMapper(MyMapMapper.class);
		return mapper.makeMyMapToBoard(mymymy);
	}

}
