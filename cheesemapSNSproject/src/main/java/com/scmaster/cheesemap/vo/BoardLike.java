package com.scmaster.cheesemap.vo;

public class BoardLike {
	private String mem_id;
	private String boa_id;
	
	public BoardLike() {
	}

	public BoardLike(String mem_id, String boa_id) {
		super();
		this.mem_id = mem_id;
		this.boa_id = boa_id;
	}

	public String getMem_id() {
		return mem_id;
	}

	public void setMem_id(String mem_id) {
		this.mem_id = mem_id;
	}

	public String getBoa_id() {
		return boa_id;
	}

	public void setBoa_id(String boa_id) {
		this.boa_id = boa_id;
	}

	@Override
	public String toString() {
		return "BoardLike [mem_id=" + mem_id + ", boa_id=" + boa_id + "]";
	}
	
}
