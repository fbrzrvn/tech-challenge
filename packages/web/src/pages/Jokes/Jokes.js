import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../../components/PostCard";
import MainLayout from "../../layout/MainLayout";
import { getPosts } from "../../redux/post/postActions";
import { PostContainer, PostWrapper } from "../Home/styles";

const Jokes = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector(state => state.post);
  const jokes = posts.filter(post => post.category === "Joke");

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

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
