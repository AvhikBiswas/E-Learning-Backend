import jwt from "jsonwebtoken";
import { JwtUserPayload } from "../types/auth";
import { adminJwt, adminType } from "../types/admin";

export function generateUserAccessToken(user: JwtUserPayload): string {
  return jwt.sign(
    { userId: user.id, email: user.email, userType: user.userType },
    process.env.JWT_SECRET as string
  );
}

export function generateAdminAccessToken(admin: adminJwt): string {
  return jwt.sign(
    {id:admin.id, userType:admin.userType},
    process.env.JWT_SECRET_ADMIN as string
  );
}
