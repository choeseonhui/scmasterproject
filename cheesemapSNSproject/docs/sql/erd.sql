/* Drop Tables */
DROP TABLE CS_BOARD_COMMENT CASCADE CONSTRAINTS;
DROP TABLE CS_BOARD_LIKE CASCADE CONSTRAINTS;
DROP TABLE CS_BOARD_TAG CASCADE CONSTRAINTS;
DROP TABLE CS_MAP_TO_BOARD CASCADE CONSTRAINTS;
DROP TABLE CS_MYMAP_BASKET CASCADE CONSTRAINTS;
DROP TABLE CS_BOARD CASCADE CONSTRAINTS;
DROP TABLE CS_FOLLOW CASCADE CONSTRAINTS;
DROP TABLE CS_MYMAP_COMMENT CASCADE CONSTRAINTS;
DROP TABLE CS_MYMAP_LIKE CASCADE CONSTRAINTS;
DROP TABLE CS_MYMAP_TAG CASCADE CONSTRAINTS;
DROP TABLE CS_MYMAP CASCADE CONSTRAINTS;
DROP TABLE CS_MEMBER CASCADE CONSTRAINTS;

/* Create Tables */
CREATE TABLE CS_BOARD
(
	BOA_ID varchar2(50) NOT NULL,
	BOA_CONTENT CLOB NOT NULL,
	BOA_CREATE_DATE date DEFAULT sysdate,
	BOA_MODIFY_DATE date,
	BOA_DELETE_DATE date,
	BOA_LATITUDE varchar2(50) NOT NULL,
	BOA_LONGITUDE varchar2(50) NOT NULL,
	BOA_PHOTO_ORIGINALFILE varchar2(300),
	BOA_PHOTO_SAVEFILE varchar2(300),
	BOA_VIDEO_ORIGINALFILE varchar2(300),
	BOA_VIDEO_SAVEFILE varchar2(300),
	MEM_ID varchar2(50) NOT NULL,
	PRIMARY KEY (BOA_ID)
);

CREATE TABLE CS_BOARD_COMMENT
(
	COM_ID varchar2(15) NOT NULL,
	COM_CONTENT varchar2(900) NOT NULL,
	COM_CREATE_DATE date DEFAULT sysdate,
	COM_MODIFY_DATE date,
	MEM_ID varchar2(50) NOT NULL,
	BOA_ID varchar2(15) NOT NULL,
	PRIMARY KEY (COM_ID)
);

CREATE TABLE CS_BOARD_LIKE
(
	MEM_ID varchar2(50) NOT NULL,
	BOA_ID varchar2(15) NOT NULL
);

CREATE TABLE CS_BOARD_TAG
(
	TAG_NAME varchar2(30) NOT NULL,
	BOA_ID varchar2(15) NOT NULL
);

CREATE TABLE CS_FOLLOW
(
	FOL_FOLLOWER varchar2(50) NOT NULL,
	FOL_FOLLOWING varchar2(50) NOT NULL
);

CREATE TABLE CS_MAP_TO_BOARD
(
	MTB_ROUTE number NOT NULL,
	BOA_ID varchar2(15) NOT NULL,
	MAP_ID varchar2(15) NOT NULL
);

CREATE TABLE CS_MEMBER
(
	MEM_ID varchar2(50) NOT NULL,
	MEM_PW varchar2(12) NOT NULL,
	MEM_BIRTH date NOT NULL,
	MEM_GENDER varchar2(10) NOT NULL,
	MEM_NICKNAME varchar2(30) NOT NULL UNIQUE,
	MEM_JOIN_DATE date DEFAULT sysdate,
	MEM_LEAVE_DATE date,
	MEM_ORIGINALFILE varchar2(50),
	MEM_SAVEFILE varchar2(50),
	MEM_CHECK NUMBER(1) DEFAULT 0,
	PRIMARY KEY (MEM_ID)
);

CREATE TABLE CS_MYMAP
(
	MAP_ID varchar2(15) NOT NULL,
	MAP_CONTENT varchar2(1500) NOT NULL,
	MAP_CREATE_DATE date DEFAULT sysdate,
	MEM_ID varchar2(50) NOT NULL,
	PRIMARY KEY (MAP_ID)
);

CREATE TABLE CS_MYMAP_BASKET
(
	MEM_ID varchar2(50) NOT NULL,
	BOA_ID varchar2(15) NOT NULL
);

CREATE TABLE CS_MYMAP_COMMENT
(
	COM_ID varchar2(15) NOT NULL,
	COM_CONTENT varchar2(900) NOT NULL,
	COM_CREATE_DATE date,
	COM_MODIFY_DATE date,
	MEM_ID varchar2(50) NOT NULL,
	MAP_ID varchar2(15) NOT NULL,
	PRIMARY KEY (COM_ID)
);

CREATE TABLE CS_MYMAP_LIKE
(
	MEM_ID varchar2(50) NOT NULL,
	MAP_ID varchar2(15) NOT NULL
);

CREATE TABLE CS_MYMAP_TAG
(
	TAG_NAME varchar2(30) NOT NULL,
	MAP_ID varchar2(15) NOT NULL
);


/* Create Foreign Keys */
ALTER TABLE CS_BOARD_COMMENT
	ADD FOREIGN KEY (BOA_ID)
	REFERENCES CS_BOARD (BOA_ID)
;

ALTER TABLE CS_BOARD_LIKE
	ADD FOREIGN KEY (BOA_ID)
	REFERENCES CS_BOARD (BOA_ID)
;

ALTER TABLE CS_BOARD_TAG
	ADD FOREIGN KEY (BOA_ID)
	REFERENCES CS_BOARD (BOA_ID)
;

ALTER TABLE CS_MAP_TO_BOARD
	ADD FOREIGN KEY (BOA_ID)
	REFERENCES CS_BOARD (BOA_ID)
;

ALTER TABLE CS_MYMAP_BASKET
	ADD FOREIGN KEY (BOA_ID)
	REFERENCES CS_BOARD (BOA_ID)
;

ALTER TABLE CS_BOARD
	ADD FOREIGN KEY (MEM_ID)
	REFERENCES CS_MEMBER (MEM_ID)
;

ALTER TABLE CS_BOARD_COMMENT
	ADD FOREIGN KEY (MEM_ID)
	REFERENCES CS_MEMBER (MEM_ID)
;

ALTER TABLE CS_BOARD_LIKE
	ADD FOREIGN KEY (MEM_ID)
	REFERENCES CS_MEMBER (MEM_ID)
;

ALTER TABLE CS_FOLLOW
	ADD FOREIGN KEY (FOL_FOLLOWER)
	REFERENCES CS_MEMBER (MEM_ID)
	ON DELETE CASCADE
;

ALTER TABLE CS_FOLLOW
	ADD FOREIGN KEY (FOL_FOLLOWING)
	REFERENCES CS_MEMBER (MEM_ID)
	ON DELETE CASCADE
;

ALTER TABLE CS_MYMAP
	ADD FOREIGN KEY (MEM_ID)
	REFERENCES CS_MEMBER (MEM_ID)
;

ALTER TABLE CS_MYMAP_BASKET
	ADD FOREIGN KEY (MEM_ID)
	REFERENCES CS_MEMBER (MEM_ID)
	ON DELETE CASCADE
;

ALTER TABLE CS_MYMAP_COMMENT
	ADD FOREIGN KEY (MEM_ID)
	REFERENCES CS_MEMBER (MEM_ID)
;

ALTER TABLE CS_MYMAP_LIKE
	ADD FOREIGN KEY (MEM_ID)
	REFERENCES CS_MEMBER (MEM_ID)
	ON DELETE CASCADE
;

ALTER TABLE CS_MAP_TO_BOARD
	ADD FOREIGN KEY (MAP_ID)
	REFERENCES CS_MYMAP (MAP_ID)
	ON DELETE CASCADE
;

ALTER TABLE CS_MYMAP_COMMENT
	ADD FOREIGN KEY (MAP_ID)
	REFERENCES CS_MYMAP (MAP_ID)
	ON DELETE CASCADE
;

ALTER TABLE CS_MYMAP_LIKE
	ADD FOREIGN KEY (MAP_ID)
	REFERENCES CS_MYMAP (MAP_ID)
	ON DELETE CASCADE
;

ALTER TABLE CS_MYMAP_TAG
	ADD FOREIGN KEY (MAP_ID)
	REFERENCES CS_MYMAP (MAP_ID)
	ON DELETE CASCADE
;

/* sequence drop */ 
DROP SEQUENCE CS_BOARD_SEQ;
DROP SEQUENCE CS_BOARD_COMMENT_SEQ;
DROP SEQUENCE CS_MYMAP_SEQ;
DROP SEQUENCE CS_MYMAP_COMMENT_SEQ;

/* sequence create */
CREATE SEQUENCE CS_BOARD_SEQ START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE CS_BOARD_COMMENT_SEQ START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE CS_MYMAP_SEQ START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE CS_MYMAP_COMMENT_SEQ START WITH 1 INCREMENT BY 1;

/* test */
select * from CS_MEMBER;
select * from CS_FOLLOW;
select * from CS_BOARD;
select * from CS_BOARD_COMMENT;
select * from CS_BOARD_TAG;
select * from CS_BOARD_LIKE;

delete CS_FOLLOW;

select
	mem_id
	, mem_nickname
	, mem_originalfile
	, mem_savefile
	, (select
			count(fol_following) fol_following
		from
			cs_follow
		where
			fol_follower = 'jwnamkung@gmail.com'
	) fol_following
	, (select
			count(fol_follower) fol_following
		from
			cs_follow
		where
			fol_following = 'jwnamkung@gmail.com'
	) fol_follower
from
	cs_member m
where
	mem_id = 'jwnamkung@gmail.com';

select
	count(fol_follower) fol_follower
from
	CS_FOLLOW
where
	fol_following = 'jwnamkung@gmail.com';

select
	count(fol_following) fol_following
from
	CS_FOLLOW
where
	fol_follower = 'jwnamkung@gmail.com';

insert into
	CS_FOLLOW
values (
	'jwnamkung@gmail.com'
	, 'hey921226@naver.com'
);

delete from 
	CS_MEMBER
where
	mem_id = 'jwnamkung@naver.com';

update
	cs_member
set
	mem_check = 1;
	
update
	cs_member
set
	mem_pw = 1;
	
insert into
	CS_BOARD_LIKE
values (
	'jwnamkung@naver.com'
	, '23'
);

select
	tag_name
	, boa_id
from
	CS_BOARD_TAG
where
	boa_id = '41'
order by
	tag_name;
	
select
	CS_FOLLOWING
from
	CS_FOLLOW
where
	CS_FOLLOWER = 'jwnamkung@naver.com';
	
update
	CS_BOARD
set
	boa_delete_date = sysdate
where
	boa_id = '21';
	
select
	mem_id
	, mem_gender
	, mem_nickname
	, mem_savefile
	, mem_birth
from
	CS_MEMBER, CS_FOLLOW
WHERE
	CS_MEMBER.mem_id = CS_FOLLOW.fol_follower
and
	CS_FOLLOW.fol_following = 'jwnamkung@naver.com';
	
select
	mem_id
	, mem_gender
	, mem_nickname
	, mem_savefile
	, mem_birth
from
	CS_MEMBER, CS_FOLLOW
WHERE
	CS_MEMBER.mem_id = CS_FOLLOW.fol_following
and
	CS_FOLLOW.fol_follower = 'jiwoongiszzang@hanmail.net';

select
	mem_id
	, mem_gender
	, mem_nickname
	, mem_savefile
	, mem_birth
from
	CS_MEMBER, CS_FOLLOW
WHERE
	CS_MEMBER.mem_id = CS_FOLLOW.fol_following
and
	CS_FOLLOW.fol_follower = 'jwnamkung@naver.com';
	
delete from CS_FOLLOW;

select
	boa_id
from
	CS_BOARD
where
	boa_id IN (select
				boa_id
			from
				cs_board_like
			where
				mem_id = 'jwnamkung@naver.com')
and
	boa_delete_date is null;
	
select
	boa_id
from
	cs_board_like
where
	mem_id = 'jwnamkung@naver.com';
	
select
	boa_id
from
	CS_BOARD
where
	boa_id = (select
				boa_id
			from
				cs_board_like
			where
				mem_id = 'jwnamkung@naver.com');
				
select
	boa_id
from
	cs_board_like
where
	mem_id = 'jwnamkung@naver.com';
	
delete cs_member;

insert into	CS_FOLLOW values ('user1@test.com', 'xornjssla@gmail.com');
insert into	CS_FOLLOW values ('user2@test.com', 'xornjssla@gmail.com');
insert into	CS_FOLLOW values ('user3@test.com', 'xornjssla@gmail.com');
insert into	CS_FOLLOW values ('user4@test.com', 'xornjssla@gmail.com');
insert into	CS_FOLLOW values ('user5@test.com', 'xornjssla@gmail.com');
insert into	CS_FOLLOW values ('user6@test.com', 'xornjssla@gmail.com');
insert into	CS_FOLLOW values ('user7@test.com', 'xornjssla@gmail.com');
insert into	CS_FOLLOW values ('user8@test.com', 'xornjssla@gmail.com');
insert into	CS_FOLLOW values ('user9@test.com', 'xornjssla@gmail.com');
insert into	CS_FOLLOW values ('user10@test.com', 'xornjssla@gmail.com');
insert into	CS_FOLLOW values ('user11@test.com', 'xornjssla@gmail.com');
insert into	CS_FOLLOW values ('user12@test.com', 'xornjssla@gmail.com');
insert into	CS_FOLLOW values ('user13@test.com', 'xornjssla@gmail.com');
insert into	CS_FOLLOW values ('user14@test.com', 'xornjssla@gmail.com');
insert into	CS_FOLLOW values ('user15@test.com', 'xornjssla@gmail.com');
insert into	CS_FOLLOW values ('user16@test.com', 'xornjssla@gmail.com');
insert into	CS_FOLLOW values ('user17@test.com', 'xornjssla@gmail.com');
insert into	CS_FOLLOW values ('user18@test.com', 'xornjssla@gmail.com');
insert into	CS_FOLLOW values ('user19@test.com', 'xornjssla@gmail.com');
insert into	CS_FOLLOW values ('user20@test.com', 'xornjssla@gmail.com');
insert into	CS_FOLLOW values ('user21@test.com', 'xornjssla@gmail.com');
insert into	CS_FOLLOW values ('user22@test.com', 'xornjssla@gmail.com');
insert into	CS_FOLLOW values ('user23@test.com', 'xornjssla@gmail.com');
insert into	CS_FOLLOW values ('user24@test.com', 'xornjssla@gmail.com');
insert into	CS_FOLLOW values ('user25@test.com', 'xornjssla@gmail.com');
insert into	CS_FOLLOW values ('user26@test.com', 'xornjssla@gmail.com');
insert into	CS_FOLLOW values ('user27@test.com', 'xornjssla@gmail.com');
insert into	CS_FOLLOW values ('user28@test.com', 'xornjssla@gmail.com');
insert into	CS_FOLLOW values ('user29@test.com', 'xornjssla@gmail.com');
insert into	CS_FOLLOW values ('user30@test.com', 'xornjssla@gmail.com');