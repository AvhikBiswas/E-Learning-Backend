import { Request, Response, NextFunction } from "express";
import UserRegister from "../../service/UserRegister";
import { UserPayload } from "../../types/User";


const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, profilePicture } = req.body;
    if (!name || !email || !password) {
      throw new Error("Name, email, and password are required fields");
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
      throw new Error("Chose A Strong Password");
    }

    const emailRegex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Invalid email format");
    }

    const userData: UserPayload = { name, email, password, profilePicture };

    const newUser = await UserRegister(userData);

    if (!newUser) {
      throw new Error("User Alredy Exist");
    }
    return res.status(201).json({
      success: true,
      message: "Successfully user Created",
      data: newUser,
      err: {},
    });
  } catch (error: any) {
    return res.status(400).json({
      success: false,
      message: error?.message || "Something Went Wrong",
      data: {},
      err: error,
    });
  }
};

export default registerUser;
