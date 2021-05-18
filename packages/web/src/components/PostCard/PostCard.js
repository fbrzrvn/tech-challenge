import { object } from "prop-types";
import React from "react";
import { Card, PostH2, PostImg, PostInfo, PostP } from "./styles";

const PostCard = ({ post }) => {
  return (
    <Card>
      <PostImg src={post.media} alt={post.title} />
      <PostInfo>
        <PostH2>{post.title}</PostH2>
        <PostP>{post.description}</PostP>
        <PostP>{post.category}</PostP>
      </PostInfo>
    </Card>
  );
};

PostCard.propTypes = {
  post: object.isRequired,
};

export default PostCard;
