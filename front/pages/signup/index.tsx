import { useCallback, useState } from "react";
import { Button, Error, Form, Header, Input, Label, LinkContainer, SignupContainer, Success } from "./styles";
import useInput from "@hooks/useInput";
import Link from "next/link";
import { signUpAPI } from "apis/user";
import { useRouter } from "next/router";
import AppLayout from "@components/AppLayout";

const SignUp = () => {
  const router = useRouter();
  const [email, onChangeEmail] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [nicknameError, setNicknameError] = useState(false);
  const [mismatchError, setMismatchError] = useState(false);
  const [signUpError, setSignUpError] = useState("");
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSignUpError("");
      setNicknameError(false)
      setPassword(e.target.value);
      setMismatchError(e.target.value !== passwordCheck);
      // 함수 기준 외부 변수만 deps에 넣음 (내부는 괜찮다)
      // setPassword, setMismatchError는 변하지 않기에 안적어도 됨 (공식문서 참조)
    },
    [passwordCheck]
  );

  const onChangePasswordCheck = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSignUpError("");
      setNicknameError(false)
      setPasswordCheck(e.target.value);
      setMismatchError(e.target.value !== password);
    },
    [password]
  );

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (nickname === '') {
        setNicknameError(true)
        setSignUpError("");
        return
      }
      
      if (password === '' || passwordCheck === '') {
        setNicknameError(false)
        setMismatchError(true)
        return 
      }

      if (!mismatchError && nickname) {
        setSignUpError("");
        setNicknameError(false);
        setSignUpSuccess(false);
        signUpAPI({ email, password, nickname })
          .then((res) => {
            console.log(res);
            router.replace("/");
            setSignUpSuccess(true);
          })
          .catch((error) => {
            console.log(error);
            setSignUpError(error.response.data.message)
          })
          .finally(() => {});
      }
      console.log(email, nickname, password, passwordCheck);
      // 바뀌는 부분(deps)에 state들을 다 넣어줘야 값이 업데이트 된다.
      // useCallback은 하나라도 값이 바뀔 때 까지 기존 값을 캐싱하기 때문
    },
    [email, nickname, password, passwordCheck, mismatchError]
  );

  return (
    <AppLayout>
      <SignupContainer id="container">
        <Header>Sign-Up</Header>
        <Form onSubmit={onSubmit}>
          <Label id="email-label">
            <span>이메일 주소</span>
            <div>
              <Input type="email" id="email" name="email" maxLength={50} value={email} onChange={onChangeEmail} />
            </div>
          </Label>
          <Label id="nickname-label">
            <span>닉네임</span>
            <div>
              <Input type="text" id="nickname" name="nickname" maxLength={16} value={nickname} onChange={onChangeNickname} />
            </div>
          </Label>
          <Label id="password-label">
            <span>비밀번호</span>
            <div>
              <Input type="password" id="password" name="password" maxLength={20} value={password} onChange={onChangePassword} />
            </div>
          </Label>
          <Label id="password-check-label">
            <span>비밀번호 확인</span>
            <div>
              <Input
                type="password"
                id="password-check"
                name="password-check"
                value={passwordCheck}
                onChange={onChangePasswordCheck}
              />
            </div>
            {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
            {!email && <Error>이메일을 입력해주세요.</Error>}
            {nicknameError && <Error>닉네임을 입력해주세요.</Error>}
            {signUpError && <Error>{signUpError}</Error>}
            {signUpSuccess && <Success>회원가입되었습니다! 로그인해주세요.</Success>}
          </Label>
          <Button type="submit">회원가입</Button>
        </Form>
        <LinkContainer>
          이미 회원이신가요?&nbsp;
          <Link href="/login">로그인 하러가기</Link>
        </LinkContainer>
      </SignupContainer>
    </AppLayout>
  );
};

export default SignUp;
