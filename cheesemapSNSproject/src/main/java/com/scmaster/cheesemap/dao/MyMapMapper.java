package com.scmaster.cheesemap.dao;

import java.util.ArrayList;

import com.scmaster.cheesemap.vo.Board;
import com.scmaster.cheesemap.vo.MyMyMy;
import com.scmaster.cheesemap.vo.MymapTag;

public interface MyMapMapper {

	public ArrayList<Board> setMarkerList(String[] selectedMarker);
	public int makeMyMap(MyMyMy mymymy);
	public String newMapID();
	public int makeMyMapTag(MymapTag myMapTag);
	public int makeMyMapToBoard(MyMyMy mymymy);
	
}
