const db = require("../models");

// create main model
const User = db.users;

// create User
const addUser = async (req, res) => {
  // validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // create a User
  let info = {
    name: req.body.title,
    email: req.body.price,
    phone: req.body.description,
    roles: req.body.description,
    password: req.body.description,
    published: req.body.published ? req.body.published : false,
  };

  // save User in the database
  try {
    const user = await User.create(info);
    res.status(200).send(user);
    console.log(user);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error occurred while creating the User",
    });
  }
};

// get all products
const getAllUsers = async (req, res) => {
  // let products = await User.findAll({
  //     attributes: [
  //         'title',
  //         'price'
  //     ]
  // });

  let users = await User.findAll({});
  res.status(200).send(users);
  console.log(users);
};

// get single products
const getSingleUser = async (req, res) => {
  let id = req.params.id;
  let user = await User.findOne({ where: { id: id } });
  res.status(200).send(user);
};

// update a product
const updateUser = async (req, res) => {
  let id = req.params.id;
  const user = await User.update(req.body, { where: { id: id } });
  res.status(200).send('User is Updated');
};

// delete a product
const deleteUser = async (req, res) => {
  let id = req.params.id;
  await User.destroy({ where: { id: id } });
  res.status(200).send("User is deleted");
};

// get published product
const getPublishedUser = async (req, res) => {
  const users = await User.findAll({ where: { published: true } });
  res.status(200).send(users);
};

module.exports = {
  addUser,
  getAllUsers,
  getPublishedUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
