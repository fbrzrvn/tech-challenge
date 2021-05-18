import React from "react";
import UploadForm from "../../components/UploadForm";
import UploadFileLayout from "../../layout/UploadFileLayout";
import { GIF } from "../../utils/fileTypes";

const UploadGif = () => {
  return (
    <UploadFileLayout>
      <UploadForm fileType={GIF} />
    </UploadFileLayout>
  );
};

export default UploadGif;
