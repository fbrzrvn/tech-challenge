import { bool, func } from "prop-types";
import React from "react";
import Button from "../Button";
import SearchBar from "../SearchBar";
import {
  CloseIcon,
  Icon,
  SidebarBtn,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
} from "./styles";

const Sidebar = ({ toggleNavbar, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggleNavbar}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SearchBar />
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggleNavbar}>
            Gifs
          </SidebarLink>
          <SidebarLink to="/" onClick={toggleNavbar}>
            Jokes
          </SidebarLink>
          <SidebarLink to="/" onClick={toggleNavbar}>
            Memes
          </SidebarLink>
          <SidebarLink to="/" onClick={toggleNavbar}>
            Upload
          </SidebarLink>
          <SidebarBtn>
            <Button>SignIn</Button>
          </SidebarBtn>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  toggleNavbar: func.isRequired,
  isOpen: bool.isRequired,
};

export default Sidebar;
