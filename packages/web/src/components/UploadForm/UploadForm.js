import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { authSelector } from "../../redux/auth/authSelector";
import { createPost } from "../../redux/post/postActions";
import { GIF, JOKE, MEME } from "../../utils/fileTypes";
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
  RadioButton,
  RadioButtonLabel,
  Select,
  SelectWrap,
} from "./styles";

const UploadForm = () => {
  const { currentUser } = useSelector(authSelector);
  const initialState = {
    title: "",
    description: "",
    media: "",
    category: GIF,
    author: currentUser.user._id,
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();
    if (formData.category !== JOKE) {
      if (!formData.media) {
        setErrors({ media: "A media file is required" });
        return;
      }
    }
    dispatch(createPost(formData));
    history.push("/");
    setFormData(initialState);
  };

  return (
    <Container>
      <FormWrapper>
        <FormContent>
          <FormH1>Create a new post</FormH1>
          <FormWrap onSubmit={handleSubmit}>
            <FormLabel>Category</FormLabel>
            <SelectWrap>
              <Select>
                <RadioButton
                  type="radio"
                  name="radio"
                  value={GIF}
                  checked={formData.category === GIF}
                  onChange={e =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                />
                <RadioButtonLabel />
                <div>Gif</div>
              </Select>
              <Select>
                <RadioButton
                  type="radio"
                  name="radio"
                  value={MEME}
                  checked={formData.category === MEME}
                  onChange={e =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                />
                <RadioButtonLabel />
                <div>Meme</div>
              </Select>
              <Select>
                <RadioButton
                  type="radio"
                  name="radio"
                  value={JOKE}
                  checked={formData.category === JOKE}
                  onChange={e =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                />
                <RadioButtonLabel />
                <div>Joke</div>
              </Select>
            </SelectWrap>
            <FormLabel>Title</FormLabel>
            <FormInput
              name="title"
              type="text"
              placeholder="Enter a title"
              value={formData.title}
              onChange={e =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
            />
            {errors.title && <ErrorMsg>{errors.title}</ErrorMsg>}
            {formData.category === JOKE ? (
              <>
                <FormLabel>Description</FormLabel>
                <FormTextarea
                  name="description"
                  placeholder="Enter a description"
                  rows={5}
                  cols={5}
                  value={formData.description}
                  onChange={e =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  required
                />
                {errors.description && (
                  <ErrorMsg>{errors.description}</ErrorMsg>
                )}
              </>
            ) : (
              <FileInputWrap>
                <FormLabel>Upload a file</FormLabel>
                <FileBase
                  type="file"
                  name="media"
                  multiple={false}
                  onDone={({ base64 }) =>
                    setFormData({ ...formData, media: base64 })
                  }
                />
              </FileInputWrap>
            )}
            {errors.media && <ErrorMsg>{errors.media}</ErrorMsg>}

            <Button>Send</Button>
          </FormWrap>
        </FormContent>
      </FormWrapper>
    </Container>
  );
};

export default UploadForm;
