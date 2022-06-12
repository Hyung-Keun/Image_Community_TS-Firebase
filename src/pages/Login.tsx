import React from "react";

import { getCookie, setCookie, deleteCookie } from "@shared/Cookie";

import { Text, Input, Grid, Button } from "../elements/index";

const Login = () => {
  const login = () => {
    setCookie("user_id", "dog", 3);
    setCookie("user_pwd", "cat", 3);
  };

  console.log(document.cookie);
  console.log(getCookie("user_id"));
  console.log(getCookie("user_pwd"));
  console.log(deleteCookie("user_id"));
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="32px" bold>
          로그인
        </Text>

        <Grid padding="16px 0px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요."
            onChange={() => {
              console.log("아이디 입력했어!");
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="패스워드"
            placeholder="패스워드 입력해주세요."
            onChange={() => {
              console.log("패스워드 입력했어!");
            }}
          />
        </Grid>

        <Button
          text="로그인하기"
          onClick={() => {
            console.log("로그인 했어!");
            login();
          }}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
