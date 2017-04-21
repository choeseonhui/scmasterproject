package com.scmaster.cheesemap.vo;

public class Follow {
	
	private String fol_follower;
	private String fol_following;
	
	public Follow(String fol_follower, String fol_following) {
		this.fol_follower = fol_follower;
		this.fol_following = fol_following;
	}
	
	public Follow() {
	}

	public String getFol_follower() {
		return fol_follower;
	}

	public void setFol_follower(String fol_follower) {
		this.fol_follower = fol_follower;
	}

	public String getFol_following() {
		return fol_following;
	}

	public void setFol_following(String fol_following) {
		this.fol_following = fol_following;
	}

	@Override
	public String toString() {
		return "Follow [fol_follower=" + fol_follower + ", fol_following=" + fol_following + "]";
	}

}
