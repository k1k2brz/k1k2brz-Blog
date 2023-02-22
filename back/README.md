## REST API

### 회원가입
@POST /auth/signup<br />
{
    "username"
    "password"
}

### 로그인
@POST /auth/login<br />
{
    "username"
    "password"
}

### 유저 찾기
@GET /:id<br />
{

}

### 비밀번호 변경
@PATCH /auth/:userId/changepassword<br />
{
    "password"
}

### 게시글 쓰기
@POST /post/create<br />
{
    "title"
    "content"
}

### 게시글 리스트 불러오기
@GET /post<br />

### 게시글 수정
