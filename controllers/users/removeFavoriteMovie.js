const { User } = require("../../models");

const removeFavoriteMovie = async (req, res, next) => {
  const { _id } = req.user;

  try {
    await User.updateOne({ id: _id }, { $pull: { favorite: { id: 10 } } });
    res.json({
      status: "success",
      code: 200,
      data: {
        data: "ok",
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = removeFavoriteMovie;
