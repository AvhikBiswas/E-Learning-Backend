import { prismaClient } from "../db";
import { otpCreatePaylod } from "../types/otpUserPayload";

class resetOtp {
  async creataOtp(createOtpData: otpCreatePaylod) {
    if (!createOtpData.expirationTime) return;
    try {
      const Data = await prismaClient.userOTP.create({
        data: {
          email: createOtpData.email,
          otp: createOtpData.otp,
          expirationTime: createOtpData.expirationTime,
        },
      });
    } catch (error) {
      throw new Error("Somting Went Wrong");
    }
  }

  async findUserOtp(createOtpData: otpCreatePaylod) {
    try {
      const data = await prismaClient.userOTP.findFirst({
        where: {
          email: createOtpData.email,
          otp: createOtpData.otp,
          expirationTime: {
            gte: new Date(),
          },
        },
      });
      return data;
    } catch (error) {
      throw new Error("Somting Went Wrong");
    }
  }
  async deleteUserOtp(userOtpID: string) {
    try {
      const data = await prismaClient.userOTP.delete({
        where: { id: userOtpID },
      });
      return data;
    } catch (error) {
      throw new Error("Somting Went Wrong");
    }
  }
}

export default resetOtp;
