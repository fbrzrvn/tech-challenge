import React from "react";
import UploadForm from "../../components/UploadForm";
import UploadFileLayout from "../../layout/UploadFileLayout";
import { MEME } from "../../utils/fileTypes";

const UploadMeme = () => {
  return (
    <UploadFileLayout>
      <UploadForm fileType={MEME} />
    </UploadFileLayout>
  );
};

export default UploadMeme;
