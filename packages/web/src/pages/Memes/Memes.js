import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../../components/PostCard";
import MainLayout from "../../layout/MainLayout";
import { getPosts } from "../../redux/post/postActions";
import { PostContainer, PostWrapper } from "../Home/styles";

const Memes = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector(state => state.post);
  const memes = posts.filter(post => post.category === "Meme");

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

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
