import React from "react";
import UploadFileLayout from "../../layout/UploadFileLayout";
import * as ROUTES from "../../routes";
import { CardTitle, Container, NavbarLink } from "./styles";

const UploadFile = () => {
  return (
    <UploadFileLayout>
      <CardTitle>What do you want to upload?</CardTitle>
      <Container>
        <NavbarLink to={ROUTES.UPLOAD_GIF}>GIF</NavbarLink>
        <NavbarLink to={ROUTES.UPLOAD_MEME}>MEME</NavbarLink>
        <NavbarLink to={ROUTES.UPLOAD_JOKE}>JOKE</NavbarLink>
      </Container>
    </UploadFileLayout>
  );
};

export default UploadFile;
