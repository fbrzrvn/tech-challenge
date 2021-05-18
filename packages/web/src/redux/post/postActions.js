import * as API from "../../api";
import * as postTypes from "./postTypes";

export const uploadRequest = () => ({
  type: postTypes.UPLOAD_REQUEST,
});

export const uploadError = message => ({
  type: postTypes.UPLOAD_ERROR,
  payload: message,
});

export const uploadSuccess = post => ({
  type: postTypes.UPLOAD_SUCCESS,
  payload: post,
});

export const resetPostState = () => ({
  type: postTypes.RESET_POST_STATE,
});

export const createPost = post => async dispatch => {
  dispatch(uploadRequest());
  try {
    const { data } = await API.createPost(post);
    dispatch(uploadSuccess(data));
  } catch (error) {
    dispatch(uploadError(error));
  }
  return resetPostState();
};

export const fetchRequest = () => ({
  type: postTypes.FETCH_REQUEST,
});

export const fetchError = message => ({
  type: postTypes.FETCH_ERROR,
  payload: message,
});

export const fetchSuccess = posts => ({
  type: postTypes.FETCH_SUCCESS,
  payload: posts,
});

export const getPosts = () => async dispatch => {
  dispatch(fetchRequest());
  try {
    const { data } = await API.fetchPosts();
    dispatch(fetchSuccess(data));
  } catch (error) {
    dispatch(fetchError(error.message));
  }
  dispatch(resetPostState);
};
