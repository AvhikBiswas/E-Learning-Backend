import { Request, Response, NextFunction } from "express";
import { UserPayload } from "../types/User";
import UserRegister from "../service/UserRegister";

const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      throw new Error("Name, email, and password are required fields");
    }
    const userData: UserPayload = req.body;

    const newUser = await UserRegister(userData);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(userData.email)) {
      throw new Error("Invalid email format");
    }
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
