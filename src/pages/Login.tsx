import React from "react";

import { getCookie, setCookie, deleteCookie } from "@shared/Cookie";

import { Text, Input, Grid, Button } from "../elements/index";

const Login = () => {
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const changeId: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event.target.value);
    setId(event.target.value);
  };

  const changePwd: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event.target.value);
    setPwd(event.target.value);
  };

  const login = () => {
    setCookie("user_id", "dog", 3);
    setCookie("user_pwd", "cat", 3);
  };

  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="32px" bold>
          로그인
        </Text>

        <Grid padding="16px 0px">
          <Input
            label="아이디"
            value={id}
            placeholder="아이디를 입력해주세요."
            onChange={changeId}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="패스워드"
            value={pwd}
            placeholder="패스워드 입력해주세요."
            onChange={changePwd}
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
