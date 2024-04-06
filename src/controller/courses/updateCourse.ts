import { Request, Response } from "express";
import { CourseUpdatePayload } from "../../types/Course";
import updateCourse from "../../service/updateCourse";


const updateCourseController = async (req: Request, res: Response) => {
  const updateCourseData: CourseUpdatePayload = req.body;

  console.log("req.body", req.body);

  if (
    !updateCourseData.newTitle &&
    !updateCourseData.newCategory &&
    !updateCourseData.newLevel &&
    !updateCourseData.newPopularity
  ) {
    return res.status(400).json({
      success: false,
      message: "All fields cannot be null",
      data: null,
      error: "Title, category, level, and popularity are required fields",
    });
  }

  try {
    const updatedCourseData = await updateCourse(updateCourseData);
    res.status(201).json({
      success: true,
      message: "Course Updated successfully",
      data: updatedCourseData,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update course",
      data: null,
      error: error,
    });
  }
};

export default updateCourseController;
