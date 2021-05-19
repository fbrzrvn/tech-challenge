import { node } from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Button from "../../components/Button";
import { authSelector } from "../../redux/auth/authSelector";
import * as ROUTES from "../../routes";
import MainLayout from "../MainLayout";
import { Card, CardBody, CardTitle, Container, LinkWrap } from "./styles";

const UploadFileLayout = ({ children }) => {
  const { isAuthenticated } = useSelector(authSelector);
  const history = useHistory();

  const handleClick = () => {
    history.push(ROUTES.SIGN_IN);
  };

  return (
    <MainLayout>
      {isAuthenticated ? (
        <Container>
          <Card>{children}</Card>
        </Container>
      ) : (
        <Card>
          <CardTitle>Sign up to continue</CardTitle>
          <CardBody>
            You&apos;ll need to sign in before upload any content
          </CardBody>
          <Button primary onClick={handleClick}>
            Sign In
          </Button>
          <LinkWrap>
            <Link to={ROUTES.SIGN_UP}>Don&apos;t have an account? Sign Up</Link>
          </LinkWrap>
        </Card>
      )}
      ;
    </MainLayout>
  );
};

UploadFileLayout.propTypes = {
  children: node.isRequired,
};

export default UploadFileLayout;
