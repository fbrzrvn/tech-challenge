import moment from "moment";
import { object } from "prop-types";
import React, { useState } from "react";
import { AiOutlineLink } from "react-icons/ai";
import {
  Card,
  PostFooter,
  PostH2,
  PostIcon,
  PostImg,
  PostInfo,
  PostP,
  PostSpan,
  SuccessMsg,
} from "./styles";

const PostCard = ({ post }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(post.url);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <Card>
      {post.category !== "Joke" && (
        <PostImg src={post.media || post.url} alt={post.title} />
      )}
      <PostInfo>
        <PostH2>{post.title}</PostH2>
        {post.category === "Joke" && <PostP joke>{post.description}</PostP>}
        <PostFooter>
          <PostSpan>{moment(post.createdAt).fromNow()}</PostSpan>
          {post.url && (
            <PostIcon onClick={handleCopyUrl}>
              <AiOutlineLink />
            </PostIcon>
          )}
        </PostFooter>
      </PostInfo>
      {isCopied && <SuccessMsg>Link copied to clipboard</SuccessMsg>}
    </Card>
  );
};

PostCard.propTypes = {
  post: object.isRequired,
};

export default PostCard;
