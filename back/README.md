## REST API

### 회원가입
@POST /auth/signup
{
    "username"
    "password"
}

### 로그인
@POST /auth/login
{
    "username"
    "password"
}

### 유저 찾기
@GET /:id
{

}

### 비밀번호 변경
@PATCH /auth/:userId/changepassword
{
    "password"
}

### 게시글 쓰기
@POST /post/create
{
    "title"
    "content"
}

### 게시글 리스트 불러오기
@GET /post

### 게시글 수정
