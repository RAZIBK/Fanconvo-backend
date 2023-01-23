const bcrypt = require("bcrypt");
const User = require("../../model/user/userModel");

const userSignupCtrl = async (req, res) => {
  try {
    let ifUser = await User.findOne({ email: req.body.email });
    if (ifUser) {
      res.status(409).json({ message: "User Already registered" });
    }
    const salt = bcrypt.genSaltSync(10);
    req.body.password = bcrypt.hashSync(req.body.password, salt);
    let userData = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
      timeZone: req.body.timeZone,
    });
    res.json({ userData, status: true, message: "Registration successful" });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { userSignupCtrl };
