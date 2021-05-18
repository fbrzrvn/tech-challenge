import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { authSelector } from "../../redux/auth/authSelector";
import { createPost } from "../../redux/post/postActions";
import Button from "../Button";
import {
  Container,
  FileInputWrap,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormTextarea,
  FormWrap,
  FormWrapper,
  Select,
  SelectWrap,
  RadioButton,
  RadioButtonLabel,
} from "./styles";

const UploadForm = () => {
  const { currentUser } = useSelector(authSelector);
  const initialState = {
    title: "",
    description: "",
    media: "",
    category: "Gif",
    author: currentUser.user._id,
  };

  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(createPost(formData));
    history.push("/");
    setFormData(initialState);
  };

  return (
    <Container>
      <FormWrapper>
        <FormContent>
          <FormH1>Create a new Post</FormH1>
          <FormWrap onSubmit={handleSubmit}>
            <FormLabel>Category</FormLabel>
            <SelectWrap>
              <Select>
                <RadioButton
                  type="radio"
                  name="radio"
                  value="Gif"
                  checked={formData.category === "Gif"}
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
                  value="Meme"
                  checked={formData.category === "Meme"}
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
                  value="Joke"
                  checked={formData.category === "Joke"}
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
            />
            {formData.category === "Joke" ? (
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
                />
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

            <Button>Send</Button>
          </FormWrap>
        </FormContent>
      </FormWrapper>
    </Container>
  );
};

export default UploadForm;
