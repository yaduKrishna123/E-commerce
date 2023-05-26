const user = require('../models/userschema');
const jwt = require('jsonwebtoken');

exports.LoginUser = async (req, res) => {
  const { name, psw } = req.body;

  try {
    const userdata = await user.findOne({ name });

    if (userdata) {
      const token = jwt.sign({ loginuser: name }, "super");
      res.status(200).json({ token: token, data: userdata });
    } else {
      res.status(401).json('User not found');
    }
  } catch (error) {
    res.status(500).json('Internal server error');
  }
};
