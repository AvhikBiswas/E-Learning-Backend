import { sendPasswordResetEmail } from "../helper/emailSender";
import getExpireTime from "../helper/expireTime";
import generateOTP from "../helper/genarateOTP";
import resetOtp from "../repository/resetOtp";
import { otpCreatePaylod } from "../types/otpUserPayload";

export async function ResetEmailOTP(userEmail: string) {
  const userOtpRepository = new resetOtp();
  // Generate OTP
  try {
    const newotp = generateOTP();

    const expirationTime = getExpireTime();

    const otpUserData = await userOtpRepository.creataOtp({
      email: userEmail,
      otp: newotp,
      expirationTime,
    });

    const isEmailSend = await sendPasswordResetEmail(userEmail, newotp);

    return true;
  } catch (error) {
    return false;
  }
}


