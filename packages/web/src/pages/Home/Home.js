import React from "react";
import { useSelector } from "react-redux";
import PostCard from "../../components/PostCard";
import MainLayout from "../../layout/MainLayout";
import { postSelector } from "../../redux/post/postSelector";
import { PostContainer, PostWrapper } from "./styles";

const Home = () => {
  const { posts } = useSelector(postSelector);

  return (
    <MainLayout>
      <PostContainer>
        <PostWrapper>
          {posts.map(post => (
            <PostCard key={post._id} post={post} />
          ))}
        </PostWrapper>
      </PostContainer>
    </MainLayout>
  );
};

export default Home;
