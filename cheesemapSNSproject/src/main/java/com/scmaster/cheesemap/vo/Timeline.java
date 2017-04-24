package com.scmaster.cheesemap.vo;

import java.util.ArrayList;
import java.util.HashMap;

public class Timeline {
	private Board board;
	private ArrayList<BoardComment> boardComment;
	private ArrayList<BoardTag> boardTag;
	private ArrayList<BoardLike> boardLike;
	private ArrayList<HashMap<String, Object>> boardCommentNick;

	public Timeline() {
		super();
	}

	public Timeline(Board board, ArrayList<BoardComment> boardComment, ArrayList<BoardTag> boardTag,
			ArrayList<BoardLike> boardLike, ArrayList<HashMap<String, Object>> boardCommentNick) {
		super();
		this.board = board;
		this.boardComment = boardComment;
		this.boardTag = boardTag;
		this.boardLike = boardLike;
		this.boardCommentNick = boardCommentNick;
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

	public ArrayList<HashMap<String, Object>> getBoardCommentNick() {
		return boardCommentNick;
	}

	public void setBoardCommentNick(ArrayList<HashMap<String, Object>> boardCommentNick) {
		this.boardCommentNick = boardCommentNick;
	}

	@Override
	public String toString() {
		return "Timeline [board=" + board + ", boardComment=" + boardComment + ", boardTag=" + boardTag + ", boardLike="
				+ boardLike + ", boardCommentNick=" + boardCommentNick + "]";
	}

}
