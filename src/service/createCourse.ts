import Course from "../repository/course";
import { CoursePayload } from "../types/Course";

const createCourseService = async (courseData:CoursePayload) => {
  const courseRepository = new Course();
  try {
    const createCourseData = await courseRepository.createCourse(courseData);
    return createCourseData;
  } catch (error) {
    return error;
  }
};

export default createCourseService;
