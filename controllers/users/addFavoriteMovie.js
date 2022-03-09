const { User } = require("../../models");

const addFavoriteMovie = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const user = await User.findOne({ _id });
    User.findById(_id, function (err, user) {
      if (err) return console.error(err);
      user.favorite.push(req.body);
      user.save(function (err) {
        if (err) throw err;
        console.log("The operation was successful");
      });
    });

    res.json({
      status: "success",
      code: 200,
      data: {
        ok: "ok",
      },
    });
  } catch (error) {
    next(error);
  }

  // console.log("addFavoriteMovie: ", req.user);

  //  const avatarURL = path.join("public", "avatars", imageName);
  //  await User.findByIdAndUpdate(req.user._id, { avatarURL });

  // const addMovie = await User.findOneAndUpdate(
  //   { _id },
  //   { favorite: [...] },
  //   { new: true }
  // );

  // res.json({
  //   status: "success",
  //   code: 200,
  //   data: {
  //     user: {
  //       name,
  //       email,
  //       subscription,
  //     },
  //   },
  // });
};

// http://localhost:4040/api/users/add
module.exports = addFavoriteMovie;
