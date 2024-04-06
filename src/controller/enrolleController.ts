import { Request, Response } from "express";
import { courseEnroll } from "../service/courseEnroll";
import { enrollementPayload } from "../types/enrollement";

export const enrollCourseController = async (req: any, res: Response) => {
  const CourseId = req.params.courseId;
  const userId = req.user.userId;
  console.log("userId", userId);
  if (!CourseId && !userId) {
    throw new Error("Plese Provide CourseId ");
  }

  try {
    const enrolledUser = await courseEnroll({ userId, CourseId });
    if(enrolledUser===-1){
      return res.status(200).json({
        message:"User Alredy Enrolled",
        err:{}
      })
    }
    console.log('enrolledUser', enrolledUser)
    return res.status(200).json({
      message: "User enrolled successfully",
      enrollment: enrolledUser,
    });
  } catch (error: any) {
    return res
      .status(500)
      .json({ error: error.message || "Something went wrong" });
  }
};
