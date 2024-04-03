import jwt from "jsonwebtoken";
import { JwtUserPayload } from "../types/auth";

export function generateAccessToken(user: JwtUserPayload): string {
  return jwt.sign(
    { userId: user.id, email: user.email, userType: user.userType },
    process.env.JWT_SECRET as string
  );
}
