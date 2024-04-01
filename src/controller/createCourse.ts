import { Request, Response } from "express";
import createCourseService from "../service/createCourse";
import { CoursePayload } from "../types/Course";

const createCourse = async (req: Request, res: Response) => {
  const courseData:CoursePayload = req.body;
  
  if (!courseData.title || !courseData.category || !courseData.level || !courseData.popularity) {
    return res.status(400).json({
      success: false,
      message: "Missing required fields",
      data: null,
      error: "Title, category, level, and popularity are required fields",
    });
  }

  try {
    const createdCourse = await createCourseService(courseData);
    res.status(201).json({
      success: true,
      message: "Course created successfully",
      data: createdCourse,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create course",
      data: null,
      error: error,
    });
  }
};

export default createCourse;
