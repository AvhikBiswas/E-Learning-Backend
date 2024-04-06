import { Response } from "express";
import getUserCourses from "../../service/getUserCourses";

const userCoursesController = async (req: any, res: Response) => {
  try {
    const userId = req.user.userId;
    const userAllCourses = await getUserCourses(userId);
    res.status(200).json({ userCourses: userAllCourses });
  } catch (error) {
    console.error("Error retrieving user courses:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default userCoursesController;
