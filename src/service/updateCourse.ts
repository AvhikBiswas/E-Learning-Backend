import Course from "../repository/course";
import { CourseUpdatePayload } from "../types/Course";

const updateCourse = async (updateCoursePayload: CourseUpdatePayload) => {
  const courseRepository = new Course();

  try {
    const filteredCourse = await courseRepository.updateCourse(
      updateCoursePayload
    );
    return filteredCourse;
  } catch (error) {
    return error;
  }
};

export default updateCourse;
