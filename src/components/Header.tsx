import React, { useEffect } from "react";

import { getCookie, deleteCookie } from "@shared/Cookie";

import { Grid, Text, Button } from "@elements";

const Header = () => {
  const [is_login, setIsLogin] = React.useState(false);

  React.useEffect(() => {
    const cookie = getCookie("user_id");
    console.log(cookie);
    if (cookie) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  if (is_login) {
    return (
      <React.Fragment>
        <Grid is_flex padding="4px 16px">
          <Grid>
            <Text margin="0px" size="24px" bold>
              헬로
            </Text>
          </Grid>

          <Grid is_flex>
            <Button text="내정보"></Button>
            <Button text="알림"></Button>
            <Button
              text="로그아웃"
              onClick={() => {
                deleteCookie("user_id");
              }}
            ></Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <Grid is_flex padding="4px 16px">
        <Grid>
          <Text margin="0px" size="24px" bold>
            헬로
          </Text>
        </Grid>

        <Grid is_flex>
          <Button text="로그인"></Button>
          <Button text="회원가입"></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Header;
