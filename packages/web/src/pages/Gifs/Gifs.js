import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../../components/PostCard";
import MainLayout from "../../layout/MainLayout";
import { getPosts } from "../../redux/post/postActions";
import { PostContainer, PostWrapper } from "../Home/styles";

const Gifs = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector(state => state.post);
  const gifs = posts.filter(post => post.category === "Gif");

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

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
