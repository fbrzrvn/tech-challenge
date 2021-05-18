import { string } from "prop-types";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { JOKE } from "../../utils/fileTypes";
import Button from "../Button";
import {
  Container,
  ErrorMsg,
  FileInputWrap,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormTextarea,
  FormWrap,
  FormWrapper,
} from "./styles";

const UploadForm = ({ fileType }) => {
  const [image, setImage] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    mode: "onBlur",
  });

  const handleImg = e => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setImage(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <Container>
      <FormWrapper>
        <FormContent>
          <FormH1>Add a {fileType}</FormH1>
          <FormWrap onSubmit={handleSubmit(onSubmit)}>
            <FormLabel>Title</FormLabel>
            <FormInput
              name="title"
              type="text"
              placeholder="Enter a title"
              onChange={e => setValue("title", e.target.value)}
              {...register("title", {
                required: "Please enter a title",
              })}
              error={errors.title}
            />
            {errors.title && <ErrorMsg>{errors.title.message}</ErrorMsg>}
            {fileType === JOKE ? (
              <>
                <FormLabel>Joke</FormLabel>
                <FormTextarea
                  name="joke"
                  placeholder="Write here your joke"
                  rows={5}
                  cols={5}
                  onChange={e => setValue("joke", e.target.value)}
                  {...register("joke", {
                    required: "Please enter a joke",
                  })}
                  error={errors.joke}
                />
                {errors.joke && <ErrorMsg>{errors.joke.message}</ErrorMsg>}
              </>
            ) : (
              <FileInputWrap>
                <FormLabel>Upload a file</FormLabel>
                <FormInput
                  name="media"
                  type="file"
                  accept=".png, .jpg, .jpeg, .gif"
                  onChange={handleImg}
                  {...register("media", {
                    required: "A file is required",
                  })}
                  error={errors.media}
                />
                {errors.media && (
                  <ErrorMsg file>{errors.media.message}</ErrorMsg>
                )}
              </FileInputWrap>
            )}
            <Button>Send</Button>
          </FormWrap>
        </FormContent>
      </FormWrapper>
    </Container>
  );
};

UploadForm.propTypes = {
  fileType: string.isRequired,
};

export default UploadForm;
