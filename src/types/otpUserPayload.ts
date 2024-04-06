export interface otpCreatePaylod {
  email: string;
  otp: string;
  expirationTime?: string;
}
export interface otpVerifyPaylod {
  email: string;
  otp: string;
  newPassword: string;
}
