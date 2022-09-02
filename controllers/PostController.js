const { Post, Borough, Profile } = require("../models")

const GetPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        {
          model: Profile,
          attributes: ["userName", "id", "image"],
        },
      ],
    })
    res.send(posts)
  } catch (error) {
    throw error
  }
}

const GetPostById = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.post_id, {
      include: [
        {
          model: Profile,
          attributes: ["userName", "id", "image"],
        },
      ],
    })
    res.send({ post })
  } catch (error) {
    throw error
  }
}

const GetPostsByBoroughId = async (req, res) => {
  try {
    const borough = await Borough.findByPk(req.params.borough_id, {
      include: [
        {
          model: Post,
          attributes: [
            "name",
            "id",
            "image",
            "description",
            "bustLevel",
            "address",
            "profileId",
          ],
        },
      ],
    })
    res.send({ borough })
  } catch (error) {
    throw error
  }
}

const CreatePost = async (req, res) => {
  try {
    const newPost = await new Post(req.body)
    await newPost.save()
    res.send(newPost)
  } catch (error) {
    throw error
  }
}

const UpdatePost = async (req, res) => {
  try {
    let postId = parseInt(req.params.post_id)
    let updatedPost = await Post.update(req.body, {
      where: { id: postId },
      returning: true,
    })
    res.send(updatedPost)
  } catch (error) {
    throw error
  }
}

const DeletePost = async (req, res) => {
  let postId = parseInt(req.params.post_id)
  await Post.destroy({ where: { id: postId } })
  res.send({ message: `Deleted profile with an id of ${postId}` })
  try {
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetPosts,
  GetPostById,
  GetPostsByBoroughId,
  CreatePost,
  UpdatePost,
  DeletePost,
}
