package com.scmaster.cheesemap.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.scmaster.cheesemap.vo.Board;
import com.scmaster.cheesemap.vo.BoardTag;

@Repository
public class BoardDAO {

    public BoardMapper mapper;

    @Autowired
    SqlSession session;

    public int boardSave(Board board){
        mapper = session.getMapper(BoardMapper.class);
        int result = mapper.boardSave(board);
        return result;
    }

    public int tagSave(BoardTag boardTag){
        mapper = session.getMapper(BoardMapper.class);
        int result = mapper.tagSave(boardTag);
        return result;
    }
    
}
