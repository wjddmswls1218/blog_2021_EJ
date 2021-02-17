import Post from "../models/Post";

const detaliController = async (req, res) => {
  try {
    const postData = await Post.fingOne({ _id: req.params.id });
    res.render("screens/boardDetail", { postData });
  } catch (e) {
    console.log(e);
    res.render("srceens/home");
  }
};

export const boardController = {
  detaliController,
};
