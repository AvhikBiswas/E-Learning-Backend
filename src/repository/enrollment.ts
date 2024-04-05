import { prismaClient } from "../db";
import { enrollementPayload } from "../types/enrollement";

class Enrollment {
  async userEnrollment(enrollmentData: enrollementPayload) {
    try {
      const enrollData = await prismaClient.enrollment.create({
        data: {
          userId: enrollmentData.userId,
          courseId: enrollmentData.CourseId,
        },
      });
      return enrollData;
    } catch (error) {
      console.error("Error creating enrollment:", error);
      throw new Error("Error creating enrollment");
    }
  }

  async userAlreadyEnrolled(enrollmentData: enrollementPayload) {
    console.log('enrollmentData', enrollmentData)
    try {
      const enrollData = await prismaClient.enrollment.findUnique({
        where: {
          userId_courseId: {
            userId: enrollmentData.userId,
            courseId: enrollmentData.CourseId,
          },
        },
      });
      return enrollData;
    } catch (error) {
      console.error("Error checking enrollment:", error);
      throw new Error("Error checking enrollment");
    }
  }

  async userEnrolledCourses(userId: string) {
    try {
      const enrolledCourses = await prismaClient.enrollment.findMany({
        where: {
          userId,
        },
        include: {
          course: true,
        },
      });
      return enrolledCourses;
    } catch (error) {
      console.error("Error fetching enrolled courses:", error);
      throw new Error("Error fetching enrolled courses");
    }
  }
}

export default Enrollment;
