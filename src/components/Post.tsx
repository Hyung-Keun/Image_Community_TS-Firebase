import React from "react";

import { Grid, Image, Text } from "@elements";

const Post = () => {
  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex>
          <Image
            shape="circle"
            size="80px"
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
    user_name: "Coton-de-Tulear",
    user_profile:
      "https://media.newyorker.com/photos/5909713e019dfc3494ea2275/16:9/w_1280,c_limit/Rothman-Was-Jobs-an-Artist.jpg",
  },
  image_url:
    "https://images.mypetlife.co.kr/content/uploads/2018/03/09161124/file_23230_coton-de-tulear.jpg",
  contents: "Coton-de-Tulear!",
  comment_cnt: 10,
  insert_dt: "2022-06-11 10:00:00",
};

export default Post;
