package com.scmaster.cheesemap.vo;

public class MyMenu {
	private String mem_id;
	private String mem_nickname;
	private String mem_originalfile;
	private String mem_savefile;
	private int follower;
	private int following;

	public MyMenu() {
	}
	
	public MyMenu(String mem_id, String mem_nickname, String mem_originalfile, String mem_savefile, int follower,
			int following) {
		this.mem_id = mem_id;
		this.mem_nickname = mem_nickname;
		this.mem_originalfile = mem_originalfile;
		this.mem_savefile = mem_savefile;
		this.follower = follower;
		this.following = following;
	}

	public String getMem_id() {
		return mem_id;
	}

	public void setMem_id(String mem_id) {
		this.mem_id = mem_id;
	}

	public String getMem_nickname() {
		return mem_nickname;
	}

	public void setMem_nickname(String mem_nickname) {
		this.mem_nickname = mem_nickname;
	}

	public String getMem_originalfile() {
		return mem_originalfile;
	}

	public void setMem_originalfile(String mem_originalfile) {
		this.mem_originalfile = mem_originalfile;
	}

	public String getMem_savefile() {
		return mem_savefile;
	}

	public void setMem_savefile(String mem_savefile) {
		this.mem_savefile = mem_savefile;
	}

	public int getFollower() {
		return follower;
	}

	public void setFollower(int follower) {
		this.follower = follower;
	}

	public int getFollowing() {
		return following;
	}

	public void setFollowing(int following) {
		this.following = following;
	}

	@Override
	public String toString() {
		return "MyMenu [mem_id=" + mem_id + ", mem_nickname=" + mem_nickname + ", mem_originalfile=" + mem_originalfile
				+ ", mem_savefile=" + mem_savefile + ", follower=" + follower + ", following=" + following + "]";
	}
}
