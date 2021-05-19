import React from "react";
import { useSelector } from "react-redux";
import PostCard from "../../components/PostCard";
import MainLayout from "../../layout/MainLayout";
import { postSelector } from "../../redux/post/postSelector";
import { PostContainer, PostWrapper } from "../Home/styles";

const Jokes = () => {
  const { posts } = useSelector(postSelector);
  const jokes = posts.filter(post => post.category === "Joke");

  return (
    <MainLayout>
      <PostContainer>
        <PostWrapper>
          {jokes.map(post => (
            <PostCard key={post._id} post={post} />
          ))}
        </PostWrapper>
      </PostContainer>
    </MainLayout>
  );
};

export default Jokes;
