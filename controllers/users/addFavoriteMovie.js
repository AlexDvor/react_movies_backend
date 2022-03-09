const { User } = require("../../models");

const addFavoriteMovie = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const user = await User.findOne({ _id });

    // UserModel.findById("5e25a8e88170fb0f8ce90f6f", function (err, user) {
    //   if (err) return console.error(err);

    //   //Присвоение измененных значений
    //   user.name = "Светлана Иванова";
    //   user.favoriteFoods.push("гамбургер");

    //   //Сохранение документа в БД
    //   user.save(function (err) {
    //     if (err) throw err;
    //     console.log("Информация о пользователе " + user.name + " обновлена");
    //   });
    // });

    // const updatedUser = await User.findOneAndUpdate(
    //   { _id },
    //   { favorite: { ...req.body, ...user.favorite } },
    //   { new: true }
    // );

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
