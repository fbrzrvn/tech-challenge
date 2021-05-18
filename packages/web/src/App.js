import React from "react";
import { Route, Switch } from "react-router-dom";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Gifs from "./pages/Gifs";
import Home from "./pages/Home";
import Jokes from "./pages/Jokes";
import Memes from "./pages/Memes";
import UploadFile from "./pages/UploadFile";
import * as ROUTES from "./routes";
import { GlobalStyles } from "./styles/globals";

const App = () => {
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
        <Route path={ROUTES.HOME} component={Home} />
      </Switch>
    </>
  );
};

export default App;
