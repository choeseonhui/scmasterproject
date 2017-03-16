package com.scmaster.cheesemap.vo;

public class MymapComment {
	private String com_map_id;
	private String com_map_content;
	private String com_map_create_date;
	private String com_map_modify_date;
	private String mem_id;
	private String map_id;

	public MymapComment(String com_map_id, String com_map_content, String com_map_create_date,
			String com_map_modify_date, String mem_id, String map_id) {
		super();
		this.com_map_id = com_map_id;
		this.com_map_content = com_map_content;
		this.com_map_create_date = com_map_create_date;
		this.com_map_modify_date = com_map_modify_date;
		this.mem_id = mem_id;
		this.map_id = map_id;
	}

	public MymapComment() {
		super();
	}

	public String getCom_map_id() {
		return com_map_id;
	}

	public void setCom_map_id(String com_map_id) {
		this.com_map_id = com_map_id;
	}

	public String getCom_map_content() {
		return com_map_content;
	}

	public void setCom_map_content(String com_map_content) {
		this.com_map_content = com_map_content;
	}

	public String getCom_map_create_date() {
		return com_map_create_date;
	}

	public void setCom_map_create_date(String com_map_create_date) {
		this.com_map_create_date = com_map_create_date;
	}

	public String getCom_map_modify_date() {
		return com_map_modify_date;
	}

	public void setCom_map_modify_date(String com_map_modify_date) {
		this.com_map_modify_date = com_map_modify_date;
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
		return "MymapComment [com_map_id=" + com_map_id + ", com_map_content=" + com_map_content
				+ ", com_map_create_date=" + com_map_create_date + ", com_map_modify_date=" + com_map_modify_date
				+ ", mem_id=" + mem_id + ", map_id=" + map_id + "]";
	}

}
