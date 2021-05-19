import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Gifs from "./pages/Gifs";
import Home from "./pages/Home";
import Jokes from "./pages/Jokes";
import Memes from "./pages/Memes";
import Search from "./pages/Search";
import UploadFile from "./pages/UploadFile";
import { getPosts } from "./redux/post/postActions";
import { postSelector } from "./redux/post/postSelector";
import * as ROUTES from "./routes";
import { GlobalStyles } from "./styles/globals";

const App = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector(postSelector);

  useEffect(() => {
    posts.length === 0 && dispatch(getPosts());
  }, [dispatch, posts.length]);
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.JOKE} component={Jokes} />
        <Route path={ROUTES.MEME} component={Memes} />
        <Route path={ROUTES.GIF} component={Gifs} />
        <Route path={ROUTES.UPLOAD_FILE} component={UploadFile} />
        <Route path={ROUTES.SEARCH} component={Search} />
        <Route path={ROUTES.HOME} component={Home} />
      </Switch>
    </>
  );
};

export default App;
