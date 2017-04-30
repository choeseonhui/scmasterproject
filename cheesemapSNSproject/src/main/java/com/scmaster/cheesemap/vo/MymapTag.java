package com.scmaster.cheesemap.vo;

import java.util.ArrayList;
import java.util.Arrays;

public class MymapTag {
	private ArrayList<String> tag_name_list;
	private String map_id;
	private String tag_name;

	public MymapTag() {
		super();
	}

	public MymapTag(ArrayList<String> tag_name_list, String map_id, String tag_name) {
		super();
		this.tag_name_list = tag_name_list;
		this.map_id = map_id;
		this.tag_name = tag_name;
	}

	public ArrayList<String> getTag_name_list() {
		return tag_name_list;
	}

	public void setTag_name_list(ArrayList<String> tag_name_list) {
		this.tag_name_list = tag_name_list;
	}

	public String getMap_id() {
		return map_id;
	}

	public void setMap_id(String map_id) {
		this.map_id = map_id;
	}

	public String getTag_name() {
		return tag_name;
	}

	public void setTag_name(String tag_name) {
		this.tag_name = tag_name;
	}

	@Override
	public String toString() {
		return "MymapTag [tag_name_list=" + tag_name_list + ", map_id=" + map_id + ", tag_name=" + tag_name + "]";
	}

}
