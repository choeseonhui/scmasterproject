package com.scmaster.cheesemap.vo;

import java.util.ArrayList;

public class Timeline {
	private Board board;
	private ArrayList<BoardComment> boardComment;
	private ArrayList<BoardTag> boardTag;
	private ArrayList<BoardLike> boardLike;

	public Timeline() {
	}

	public Timeline(Board board, ArrayList<BoardComment> boardComment, ArrayList<BoardTag> boardTag,
			ArrayList<BoardLike> boardLike) {
		this.board = board;
		this.boardComment = boardComment;
		this.boardTag = boardTag;
		this.boardLike = boardLike;
	}

	public Board getBoard() {
		return board;
	}

	public void setBoard(Board board) {
		this.board = board;
	}

	public ArrayList<BoardComment> getBoardComment() {
		return boardComment;
	}

	public void setBoardComment(ArrayList<BoardComment> boardComment) {
		this.boardComment = boardComment;
	}

	public ArrayList<BoardTag> getBoardTag() {
		return boardTag;
	}

	public void setBoardTag(ArrayList<BoardTag> boardTag) {
		this.boardTag = boardTag;
	}

	public ArrayList<BoardLike> getBoardLike() {
		return boardLike;
	}

	public void setBoardLike(ArrayList<BoardLike> boardLike) {
		this.boardLike = boardLike;
	}

	@Override
	public String toString() {
		return "Timeline [board=" + board + ", boardComment=" + boardComment + ", boardTag=" + boardTag + ", boardLike="
				+ boardLike + "]";
	}

}
