import { func } from "prop-types";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import useWindowSize from "../../hooks/useWindowSize";
import Button from "../Button";
import SearchBar from "../SearchBar";
import {
  MobileIcon,
  Nav,
  NavContainer,
  NavItem,
  NavLink,
  NavLogo,
  NavMenu,
} from "./styles";

const Navbar = ({ toggleNavbar }) => {
  const width = useWindowSize();

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">Jokes App</NavLogo>
        <MobileIcon onClick={toggleNavbar}>
          <AiOutlineMenu />
        </MobileIcon>
        {width > 768 && <SearchBar />}
        <NavMenu>
          <NavItem>
            <NavLink to="/">Gifs</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/">Jokes</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/">Memes</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/">Upload</NavLink>
          </NavItem>
          <Button>SignIn</Button>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

Navbar.propTypes = {
  toggleNavbar: func.isRequired,
};

export default Navbar;
