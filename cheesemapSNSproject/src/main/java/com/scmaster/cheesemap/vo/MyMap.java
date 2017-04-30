package com.scmaster.cheesemap.vo;

import java.util.ArrayList;

public class MyMap {
	private String map_id;
	private ArrayList<String> map_tag_list;
	private String map_content;
	private String map_create_date;
	private String mem_nickname;
	private String map_tag;

	public MyMap() {
		super();
	}

	public MyMap(String map_id, ArrayList<String> map_tag_list, String map_content, String map_create_date,
			String mem_nickname, String map_tag) {
		super();
		this.map_id = map_id;
		this.map_tag_list = map_tag_list;
		this.map_content = map_content;
		this.map_create_date = map_create_date;
		this.mem_nickname = mem_nickname;
		this.map_tag = map_tag;
	}

	public String getMap_id() {
		return map_id;
	}

	public void setMap_id(String map_id) {
		this.map_id = map_id;
	}

	public ArrayList<String> getMap_tag_list() {
		return map_tag_list;
	}

	public void setMap_tag_list(ArrayList<String> map_tag_list) {
		this.map_tag_list = map_tag_list;
	}

	public String getMap_content() {
		return map_content;
	}

	public void setMap_content(String map_content) {
		this.map_content = map_content;
	}

	public String getMap_create_date() {
		return map_create_date;
	}

	public void setMap_create_date(String map_create_date) {
		this.map_create_date = map_create_date;
	}

	public String getMem_nickname() {
		return mem_nickname;
	}

	public void setMem_nickname(String mem_nickname) {
		this.mem_nickname = mem_nickname;
	}

	public String getMap_tag() {
		return map_tag;
	}

	public void setMap_tag(String map_tag) {
		this.map_tag = map_tag;
	}

	@Override
	public String toString() {
		return "MyMap [map_id=" + map_id + ", map_tag_list=" + map_tag_list + ", map_content=" + map_content
				+ ", map_create_date=" + map_create_date + ", mem_nickname=" + mem_nickname + ", map_tag=" + map_tag
				+ "]";
	}

}
