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
    history.push(ROUTES.SIGN_UP);
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
            You&apos;ll need to sign up before upload any content
          </CardBody>
          <Button onClick={handleClick}>Sign Up</Button>
          <LinkWrap>
            <Link to={ROUTES.SIGN_IN}>Already have an account? Sign In</Link>
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
