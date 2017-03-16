package com.scmaster.cheesemap.vo;

public class BoardComment {
	private String com_board_id;
	private String com_board_content;
	private String com_board_create_date;
	private String com_boardmodify_date;
	private String mem_id;
	private String boa_id;

	public BoardComment(String com_board_id, String com_board_content, String com_board_create_date,
			String com_boardmodify_date, String mem_id, String boa_id) {
		super();
		this.com_board_id = com_board_id;
		this.com_board_content = com_board_content;
		this.com_board_create_date = com_board_create_date;
		this.com_boardmodify_date = com_boardmodify_date;
		this.mem_id = mem_id;
		this.boa_id = boa_id;
	}

	public BoardComment() {
		super();
	}

	public String getCom_board_id() {
		return com_board_id;
	}

	public void setCom_board_id(String com_board_id) {
		this.com_board_id = com_board_id;
	}

	public String getCom_board_content() {
		return com_board_content;
	}

	public void setCom_board_content(String com_board_content) {
		this.com_board_content = com_board_content;
	}

	public String getCom_board_create_date() {
		return com_board_create_date;
	}

	public void setCom_board_create_date(String com_board_create_date) {
		this.com_board_create_date = com_board_create_date;
	}

	public String getCom_boardmodify_date() {
		return com_boardmodify_date;
	}

	public void setCom_boardmodify_date(String com_boardmodify_date) {
		this.com_boardmodify_date = com_boardmodify_date;
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
		return "BoardComment [com_board_id=" + com_board_id + ", com_board_content=" + com_board_content
				+ ", com_board_create_date=" + com_board_create_date + ", com_boardmodify_date=" + com_boardmodify_date
				+ ", mem_id=" + mem_id + ", boa_id=" + boa_id + "]";
	}

}
