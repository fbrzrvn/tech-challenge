const Router = require("express").Router;

const { postController } = require("../controllers");

const postRouter = Router();

postRouter.post("/upload-file", postController.createPost);

module.exports = {
  postRouter: postRouter,
};
