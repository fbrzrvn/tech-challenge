import React from "react";
import { useSelector } from "react-redux";
import PostCard from "../../components/PostCard";
import MainLayout from "../../layout/MainLayout";
import { postSelector } from "../../redux/post/postSelector";
import { PostContainer, PostWrapper } from "../Home/styles";

const Memes = () => {
  const { posts } = useSelector(postSelector);
  const memes = posts.filter(post => post.category === "Meme");

  return (
    <MainLayout>
      <PostContainer>
        <PostWrapper>
          {memes.map(post => (
            <PostCard key={post._id} post={post} />
          ))}
        </PostWrapper>
      </PostContainer>
    </MainLayout>
  );
};

export default Memes;
