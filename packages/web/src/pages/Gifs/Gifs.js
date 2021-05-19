import React from "react";
import { useSelector } from "react-redux";
import PostCard from "../../components/PostCard";
import MainLayout from "../../layout/MainLayout";
import { postSelector } from "../../redux/post/postSelector";
import { PostContainer, PostWrapper } from "../Home/styles";

const Gifs = () => {
  const { posts } = useSelector(postSelector);
  const gifs = posts.filter(post => post.category === "Gif");

  return (
    <MainLayout>
      <PostContainer>
        <PostWrapper>
          {gifs.map(post => (
            <PostCard key={post._id} post={post} />
          ))}
        </PostWrapper>
      </PostContainer>
    </MainLayout>
  );
};

export default Gifs;
