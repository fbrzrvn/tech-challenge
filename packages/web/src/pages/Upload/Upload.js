import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Button from "../../components/Button";
import MainLayout from "../../layout/MainLayout";
import { authSelector } from "../../redux/auth/authSelector";
import * as ROUTES from "../../routes";
import { Card, CardBody, CardTitle, LinkWrap } from "./styles";

const Upload = () => {
  const { isAuthenticated } = useSelector(authSelector);
  const history = useHistory();

  const handleClick = () => {
    history.push(ROUTES.SIGN_UP);
  };

  return (
    <MainLayout>
      {isAuthenticated ? (
        <h1>Upload a file</h1>
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
    </MainLayout>
  );
};

export default Upload;
