import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../components/Button";
import PostCard from "../../components/PostCard";
import { postSelector } from "../../redux/post/postSelector";
import * as ROUTES from "../../routes";
import { GIF, JOKE, MEME } from "../../utils/fileTypes";
import {
  Nav,
  NavContainer,
  NavLogo,
  PostWrapper,
  ResultContainer,
  ResultH2,
  ResultWrapper,
  SearchInput,
  SearchWrap,
} from "./styles";

const Search = () => {
  const { posts } = useSelector(postSelector);
  const [searchQuery, setSearchQuery] = useState("");
  const [findResult, setFindResult] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  });

  useEffect(() => {
    const foundPost = posts.filter(post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFindResult(foundPost);
  }, [posts, searchQuery]);

  const handleFilter = e => {
    const foundPost = posts
      .filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      .filter(post => post.category === e.target.id);
    setFindResult(foundPost);
  };

  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to={ROUTES.HOME}>Jokes App</NavLogo>
          <SearchWrap>
            <SearchInput
              type="search"
              placeholder="Search"
              ref={inputRef}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </SearchWrap>
        </NavContainer>
      </Nav>
      <ResultContainer>
        {!searchQuery ? (
          <ResultH2>Search for something...</ResultH2>
        ) : (
          <>
            <ResultH2>
              {findResult.length > 0
                ? ` ${
                    findResult.length
                  } result for ${searchQuery.toUpperCase()}`
                : "No result was found."}
            </ResultH2>
            <ResultWrapper>
              <Button id={GIF} onClick={handleFilter}>
                Gif
              </Button>
              <Button id={JOKE} onClick={handleFilter}>
                Joke
              </Button>
              <Button id={MEME} onClick={handleFilter}>
                Meme
              </Button>
            </ResultWrapper>
            <PostWrapper>
              {findResult.length > 0 &&
                findResult.map(result => (
                  <PostCard key={result._id} post={result} />
                ))}
            </PostWrapper>
          </>
        )}
      </ResultContainer>
    </>
  );
};

export default Search;
