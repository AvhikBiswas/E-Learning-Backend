import Course from "../repository/course";
import { CourseFilter, PaginationOptions } from "../types/Course";

const getProfileData = async (
  filterData: CourseFilter,
  paginationData: PaginationOptions
) => {
  const courseRepository = new Course();

  try {
    const filteredCourse = await courseRepository.findAllCoursesFilter(
      filterData,
      paginationData
    );
    return filteredCourse;
  } catch (error) {
    return error;
  }
};

export default getProfileData;
