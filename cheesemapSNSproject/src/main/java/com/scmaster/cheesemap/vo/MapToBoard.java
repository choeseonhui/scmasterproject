package com.scmaster.cheesemap.vo;

public class MapToBoard {
	private int mtb_route;
	private String boa_id;
	private String map_id;
	private String boa_latitude;
	private String boa_longitude;

	public MapToBoard() {
		super();
	}

	public MapToBoard(int mtb_route, String boa_id, String map_id, String boa_latitude, String boa_longitude) {
		super();
		this.mtb_route = mtb_route;
		this.boa_id = boa_id;
		this.map_id = map_id;
		this.boa_latitude = boa_latitude;
		this.boa_longitude = boa_longitude;
	}

	public int getMtb_route() {
		return mtb_route;
	}

	public void setMtb_route(int mtb_route) {
		this.mtb_route = mtb_route;
	}

	public String getBoa_id() {
		return boa_id;
	}

	public void setBoa_id(String boa_id) {
		this.boa_id = boa_id;
	}

	public String getMap_id() {
		return map_id;
	}

	public void setMap_id(String map_id) {
		this.map_id = map_id;
	}

	public String getBoa_latitude() {
		return boa_latitude;
	}

	public void setBoa_latitude(String boa_latitude) {
		this.boa_latitude = boa_latitude;
	}

	public String getBoa_longitude() {
		return boa_longitude;
	}

	public void setBoa_longitude(String boa_longitude) {
		this.boa_longitude = boa_longitude;
	}

	@Override
	public String toString() {
		return "MapToBoard [mtb_route=" + mtb_route + ", boa_id=" + boa_id + ", map_id=" + map_id + ", boa_latitude="
				+ boa_latitude + ", boa_longitude=" + boa_longitude + "]";
	}

}
