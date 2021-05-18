import React from "react";
import { Route, Switch } from "react-router-dom";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Home";
import UploadFile from "./pages/UploadFile";
import UploadGif from "./pages/UploadGif";
import UploadJoke from "./pages/UploadJoke";
import UploadMeme from "./pages/UploadMeme";
import * as ROUTES from "./routes";
import { GlobalStyles } from "./styles/globals";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.UPLOAD_GIF} component={UploadGif} />
        <Route path={ROUTES.UPLOAD_MEME} component={UploadMeme} />
        <Route path={ROUTES.UPLOAD_JOKE} component={UploadJoke} />
        <Route path={ROUTES.UPLOAD_FILE} component={UploadFile} />
        <Route path={ROUTES.HOME} component={Home} />
      </Switch>
    </>
  );
};

export default App;
