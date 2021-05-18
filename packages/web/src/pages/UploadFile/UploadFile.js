import React from "react";
import UploadForm from "../../components/UploadForm";
import UploadFileLayout from "../../layout/UploadFileLayout";
import { Container } from "./styles";

const UploadFile = () => {
  return (
    <UploadFileLayout>
      <Container>
        <UploadForm />
      </Container>
    </UploadFileLayout>
  );
};

export default UploadFile;
