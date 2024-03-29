import React, { useCallback, useEffect, useState } from "react";
import { Button, Error, Form, Header, Input, Label, LinkContainer, LoginContainer } from "./styles";
import Link from "next/link";
import useInput from "@hooks/useInput";
import { logInAPI } from "apis/user";
import AppLayout from "@components/AppLayout";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [loginError, setLoginError] = useState(false);
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoginError(false);
      logInAPI({ email, password })
        .then((res) => {
          localStorage.setItem("Token", res.accessToken);
          router.replace("/");
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {});
    },
    [email, password]
  );

  useEffect(() => {
    if (localStorage.getItem("Token")) {
      router.push('/')
    }
  }, []);

  return (
    <AppLayout>
      <LoginContainer id="container">
        <Header>로그인</Header>
        <Form onSubmit={onSubmit}>
          <Label id="email-label">
            <span>이메일 주소</span>
            <div>
              <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
            </div>
          </Label>
          <Label id="password-label">
            <span>비밀번호</span>
            <div>
              <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
            </div>
            {loginError && <Error>이메일과 비밀번호 조합이 일치하지 않습니다.</Error>}
          </Label>
          <Button type="submit">로그인</Button>
        </Form>
        <LinkContainer>
          아직 회원이 아니신가요?&nbsp;
          <Link href="/signup">회원가입 하러가기</Link>
        </LinkContainer>
      </LoginContainer>
    </AppLayout>
  );
};

export default Login;
