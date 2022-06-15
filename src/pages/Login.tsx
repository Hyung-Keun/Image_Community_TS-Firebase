import React, { useContext } from "react";

import { getCookie, setCookie, deleteCookie } from "@shared/Cookie";

import { Text, Input, Grid, Button } from "../elements/index";

import { UserInfoContext } from "@contexts/UserInfoContext";

const Login = () => {
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const userInfoContext = useContext(UserInfoContext);

  const onChangeId: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event.target.value);
    userInfoContext?.setUser(event.target.value);
  };
  console.log(userInfoContext?.user);

  const onChangePwd: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event.target.value);
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
            placeholder="아이디를 입력해주세요."
            onChange={onChangeId}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="패스워드"
            value={pwd}
            placeholder="패스워드 입력해주세요."
            onChange={onChangePwd}
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
