package com.scmaster.cheesemap.vo;

import java.util.ArrayList;
import java.util.Arrays;

public class MyMyMy {
	private ArrayList<String> selectedMarker;
	private String hashtagMap;
	private String map_content;
	private String mem_id;
	private String map_id;

	public MyMyMy(ArrayList<String> selectedMarker, String hashtagMap, String map_content, String mem_id,
			String map_id) {
		super();
		this.selectedMarker = selectedMarker;
		this.hashtagMap = hashtagMap;
		this.map_content = map_content;
		this.mem_id = mem_id;
		this.map_id = map_id;
	}

	public MyMyMy() {
		super();
	}

	public ArrayList<String> getSelectedMarker() {
		return selectedMarker;
	}

	public void setSelectedMarker(ArrayList<String> selectedMarker) {
		this.selectedMarker = selectedMarker;
	}

	public String getHashtagMap() {
		return hashtagMap;
	}

	public void setHashtagMap(String hashtagMap) {
		this.hashtagMap = hashtagMap;
	}

	public String getMap_content() {
		return map_content;
	}

	public void setMap_content(String map_content) {
		this.map_content = map_content;
	}

	public String getMem_id() {
		return mem_id;
	}

	public void setMem_id(String mem_id) {
		this.mem_id = mem_id;
	}

	public String getMap_id() {
		return map_id;
	}

	public void setMap_id(String map_id) {
		this.map_id = map_id;
	}

	@Override
	public String toString() {
		return "MyMyMy [selectedMarker=" + selectedMarker + ", hashtagMap=" + hashtagMap + ", map_content="
				+ map_content + ", mem_id=" + mem_id + ", map_id=" + map_id + "]";
	}

}
