import React from "react";

import { Grid, Image, Text } from "@elements";

const Post = () => {
  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex>
          <Image
            shape="circle"
            src={Post.defaultProps.user_info.user_profile}
          />
          <Text bold>{Post.defaultProps.user_info.user_name}</Text>
          <Text>{Post.defaultProps.insert_dt}</Text>
        </Grid>
        <Grid padding="16px">
          <Text>{Post.defaultProps.contents}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={Post.defaultProps.image_url} />
        </Grid>
        <Grid padding="16px">
          <Text bold>댓글 {Post.defaultProps.comment_cnt}개</Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: "defaultName",
    user_profile:
      "https://images.mypetlife.co.kr/content/uploads/2018/03/09161124/file_23230_coton-de-tulear.jpg",
  },
  image_url:
    "https://images.mypetlife.co.kr/content/uploads/2018/03/09161124/file_23230_coton-de-tulear.jpg",
  contents: "꼬똥 드 툴레아!",
  comment_cnt: 10,
  insert_dt: "2022-06-11 10:00:00",
};

export default Post;
