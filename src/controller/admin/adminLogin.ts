import { Request, Response, NextFunction } from "express";
import adminLogin from "../../service/adminLogin";


const signInAdmin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email or Password Can't be Null",
        success: false,
      });
    }

    const isSigninSuccData = await adminLogin({ email, password });
    if (isSigninSuccData == -1) {
      throw new Error("Please Check Your Mail Id");
    }
    if (!isSigninSuccData) {
      throw new Error("Pls provide Correct Credential");
    }
    return res.status(200).json({
      success: true,
      message: "Successfully user Login",
      data: { token: isSigninSuccData },
      err: {},
    });
  } catch (error: any) {
    return res.status(401).json({
      success: false,
      message: error?.message || "Something Went Wrong",
      data: {},
      err: error,
    });
  }
};

export default signInAdmin;
