## API

### 회원가입
@POST /auth/signup<br />
{<br />
    "username": string<br />
    "password": string<br />
}

### 로그인
@POST /auth/login<br />
{<br />
    "username": string<br />
    "password": string<br />
}

### 유저 찾기
@GET /:id<br />
{ }

### 비밀번호 변경
@PATCH /auth/:userId/changepassword<br />
{<br />
    "password": string<br />
}

### 게시글 쓰기
@POST /post/create<br />
{<br />
    "userId": number<br />
    "title": string<br />
    "content": string<br />
}

### 게시글 리스트 불러오기
@GET /post<br />
{ }

### 내 게시글 조회
@GET /post/user<br />
{ }

### 개별 게시글 조회
@GET /post/:postId
{ }

### 게시글 수정
@Patch /post/:postId/modify<br />
{<br />
    "content": string
    "status": PUBLIC or PRIVATE
}

### 게시글 삭제
@Delete /post/:postId<br />
{<br />
    "userId": string<br />
}

### 댓글 쓰기
@POST /post/comment/create<br />
{<br />
    "content": string<br />
    "userId": number<br />
    "id": number (postId)<br />
}

### 댓글 삭제
@POST /post/comment/:commentId<br />
{<br />
    "userId": number<br />
    "id": number (postId)<br />
}
