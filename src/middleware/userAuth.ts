import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { RequestWithUser } from "../types/auth";

export function isUserAuthed(
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) {
  const token = req.headers.authorization?.split(" ")[1];
  const jwtSecretKey = process.env.JWT_SECRET as string;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  jwt.verify(token, jwtSecretKey, (err: any, decoded: any) => {
    if (err) {
      return res.status(403).json({ error: "Forbidden" });
    }

    req.user = decoded;

    next();
  });
}
