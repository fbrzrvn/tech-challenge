const Router = require("express").Router;

const { postController } = require("../controllers");

const postRouter = Router();

postRouter.get("/", postController.fetchPosts);
postRouter.post("/upload-file", postController.createPost);

module.exports = {
  postRouter: postRouter,
};
