import resetOtp from "../repository/resetOtp";
import User from "../repository/user";
import { otpVerifyPaylod } from "../types/otpUserPayload";

export async function VerifyresetPassword(VerifyPayload: otpVerifyPaylod) {
  const userOtpRepository = new resetOtp();
  const userRepository = new User();
  // Retrieve OTP from the database
  try {
    const userOtp = await userOtpRepository.findUserOtp({
      email: VerifyPayload.email,
      otp: VerifyPayload.otp,
    });

    if (userOtp) {
      await userOtpRepository.deleteUserOtp(userOtp.id);
      const response = await userRepository.updatepassbyEmail(
        VerifyPayload.email,
        VerifyPayload.newPassword
      );

      return true;
    }
    return false;
  } catch (error) {
    throw new Error("Somthing Wrong");
  }
}
