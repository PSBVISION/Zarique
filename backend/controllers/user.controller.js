import userModel from "../models/user.model";
import validator from "validator"
//Route for user login
const loginUser = async (req, res) => {};

//Route for user registration
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //checking user already exist or not
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({
        success: false,
        message: "User already exists",
      });
    }
    //validating email format and strong password
    if(!validator.isEmail(email)){
      return res.json({success:false, message:"please enter valid email"})
    }
    if(!validator.isEmail(email)){
      return res.json({success:false, message:"please enter valid email"})
    }
  } catch (error) {}
};

//Route for admin login
const adminLogin = async (req, res) => {};

export { loginUser, registerUser, adminLogin };
