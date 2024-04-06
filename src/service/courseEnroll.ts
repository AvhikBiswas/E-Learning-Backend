import { sendCourseEnrollmentNotification } from "../helper/emailSender";
import Course from "../repository/course";
import Enrollment from "../repository/enrollment";
import User from "../repository/user";
import { enrollementPayload } from "../types/enrollement";



export const courseEnroll = async (enrollmentData: enrollementPayload) => {
  const enrollementRepository = new Enrollment();
  const courseRepository = new Course();
  const userRepository = new User();
  try {
    const isCoursePresent: any = await courseRepository.findCourseById(
      enrollmentData.CourseId
    );
    if (!isCoursePresent) {
      throw new Error("Course not found");
    }

    const userData: any = await userRepository.findUserById(
      enrollmentData.userId
    );

    const isUserEnrolled: any = await enrollementRepository.userAlreadyEnrolled(
      enrollmentData
    );
    if (isUserEnrolled) {
      return -1;
    }

    const enrolledUser = await enrollementRepository.userEnrollment(
      enrollmentData
    );
    await sendCourseEnrollmentNotification(
      userData.email,
      isCoursePresent.title
    );
    return enrolledUser;
  } catch (error) {
    throw new Error("Failed to enroll user in course: " + error);
  }
};
