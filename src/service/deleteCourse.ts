import Course from "../repository/course";

const updateCourse = async (courseId: string) => {
  const courseRepository = new Course();

  try {
    const isCourseExist = await courseRepository.findCourseById(courseId);
    if (isCourseExist) {
      const deleteCourse = await courseRepository.deleteCourse(courseId);
      return deleteCourse;
    }
    return isCourseExist;
  } catch (error) {
    return error;
  }
};

export default updateCourse;
