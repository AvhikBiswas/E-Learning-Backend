import { Request, Response } from "express";
import { VerifyresetPassword } from "../../service/verifyOtp";


export async function resetPasswordController(req: Request, res: Response) {
  try {
    const { email, otp, newPassword } = req.body;

    const resetSuccessful = await VerifyresetPassword({
      email,
      otp,
      newPassword,
    });
    if (email && otp && newPassword) {
      return res.status(400).json({
        message: "Plese Provide Required Field",
        success: false,
      });
    }
    if (resetSuccessful) {
      res
        .status(200)
        .json({ success: true, message: "Password reset successfully" });
    } else {
      res.status(400).json({ success: false, message: "Invalid OTP or email" });
    }
  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
}
