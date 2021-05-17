import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { SearchContainer, SearchIcon, SearchInput } from "./styles";

const SearchBar = () => {
  return (
    <SearchContainer>
      <SearchInput type="search" placeholder="Search" />
      <SearchIcon>
        <AiOutlineSearch />
      </SearchIcon>
    </SearchContainer>
  );
};

export default SearchBar;
