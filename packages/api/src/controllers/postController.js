const { logger } = require("../services");
const { Post } = require("../models");

const createPost = async (req, res) => {
  const postData = req.body;
  const newPost = new Post(postData);

  logger.debug(req.body);
  logger.debug(newPost);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = { createPost };
