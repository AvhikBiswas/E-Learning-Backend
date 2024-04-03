import { Request, Response } from "express";
import deleteCourse from "../service/deleteCourse";

async function deleteCourseController(req: Request, res: Response) {
  const { courseId } = req.params;

  try {
    const isDelete = await deleteCourse(courseId);
    res.status(200).json({
      success: true,
      message: "Course deleted successfully",
      data: isDelete,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete course",
      data: null,
      error: error,
    });
  }
}

export default deleteCourseController;
