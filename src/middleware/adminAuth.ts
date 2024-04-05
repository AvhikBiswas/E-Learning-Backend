import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { RequestWithUser } from "../types/auth";
import Admin from "../repository/admin";

export function isAdminAuthed(
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) {
  const token = req.headers.authorization?.split(" ")[1];
  const jwtSecretKey = process.env.JWT_SECRET_ADMIN as string;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  jwt.verify(token, jwtSecretKey, async (err: any, decoded: any) => {
    if (err) {
      return res.status(403).json({ error: "Forbidden" });
    }
    req.user = decoded;
    try {
      // We can use Redis to optimize it further to reduce the DB call.
      const adminRepository = new Admin();
      const user = await adminRepository.findAdmin(decoded.adminEmail);
      if (!user) {
        return res.status(404).json({ error: "Admin not found" });
      }

      next();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });
}
