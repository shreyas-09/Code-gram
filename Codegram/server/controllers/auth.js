import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

/* REGISTER USER */
export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      codeforcesId,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
    } = req.body;

    const salt = await bcrypt.genSalt(); // securing password using bycrypt: hash and compare
    const passwordHash = await bcrypt.hash(password, salt); //hash is to make rncrypt password
    // value of salt determines how strong the encryption will be, the stronger the longer it will take

    const newUser = new User({
      firstName,
      lastName,
      codeforcesId,
      email,
      password: passwordHash,
      picturePath,
      friends,
      location,
      occupation,
      viewedProfile: Math.floor(Math.random() * 10000),
      impressions: Math.floor(Math.random() * 10000),
    });
    const savedUser = await newUser.save(); // This puts the data in mongoDB. Can also use User.create
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* LOGGING IN */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body; // destructuring email and password from request
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: 'User does not exist. ' });

    const isMatch = await bcrypt.compare(password, user.password); //to compare password
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials. ' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
