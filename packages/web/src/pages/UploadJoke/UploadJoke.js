import React from "react";
import UploadForm from "../../components/UploadForm";
import UploadFileLayout from "../../layout/UploadFileLayout";
import { JOKE } from "../../utils/fileTypes";

const UploadJoke = () => {
  return (
    <UploadFileLayout>
      <UploadForm fileType={JOKE} />
    </UploadFileLayout>
  );
};

export default UploadJoke;
