<<<<<<< Updated upstream
import React from 'react'
=======
import React, { useCallback, useState } from "react";
import { Button, Error, Form, Header, Input, Label, LinkContainer, LoginContainer } from "./styles";
import Link from "next/link";
import useInput from "@hooks/useInput";
import { logInAPI } from "apis/user";

const Login = () => {
  const [loginError, setLoginError] = useState(false);
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoginError(false);
      logInAPI({ email, password })
          .then((res) => {
            console.log(res);
            // router.replace("/");
            // setSignUpSuccess(true);
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {});
    },
    [email, password]
  );
>>>>>>> Stashed changes

export default function Login() {
  return (
    <div>Login</div>
  )
}
