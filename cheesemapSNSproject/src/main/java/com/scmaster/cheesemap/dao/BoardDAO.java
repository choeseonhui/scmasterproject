package com.scmaster.cheesemap.dao;

import com.scmaster.cheesemap.vo.Board;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

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

}
