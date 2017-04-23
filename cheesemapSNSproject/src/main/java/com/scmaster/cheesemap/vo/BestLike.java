package com.scmaster.cheesemap.vo;

import java.util.ArrayList;

public class BestLike {

	private String mem_id;
	private ArrayList<String> select_img;

	public BestLike(String mem_id, ArrayList<String> select_img) {
		super();
		this.mem_id = mem_id;
		this.select_img = select_img;
	}

	public BestLike() {
		super();
	}

	public String getMem_id() {
		return mem_id;
	}

	public void setMem_id(String mem_id) {
		this.mem_id = mem_id;
	}

	public ArrayList<String> getSelect_img() {
		return select_img;
	}

	public void setSelect_img(ArrayList<String> select_img) {
		this.select_img = select_img;
	}

	@Override
	public String toString() {
		return "BestLike [mem_id=" + mem_id + ", select_img=" + select_img + "]";
	}

}
