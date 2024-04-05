import Course from "../repository/course";
import Enrollment from "../repository/enrollment";
import { enrollementPayload } from "../types/enrollement";

export const courseEnroll = async (enrollmentData: enrollementPayload) => {
  const enrollementRepository = new Enrollment();
  const courseRepository = new Course();
  try {
    const isCoursePresent = await courseRepository.findCourseById(
      enrollmentData.CourseId
    );
    if (!isCoursePresent) {
      // we can check if the course is full or not,here we check presense of the course
      throw new Error("Course Not Present");
    }
    const Data = await enrollementRepository.userAlreadyEnrolled(
      enrollmentData
    );
    if (Data) {
      throw new Error("User Alreddy Present In Course");
    }
    if (!Data) {
      const enrolleUser = await enrollementRepository.userEnrollment(
        enrollmentData
      );
      return enrolleUser;
    }
    return;
  } catch (error) {
    throw new Error("Something Went Wrong");
  }
};
