import Enrollment from "../repository/enrollment";

const getUserCourses = async (userId: string) => {
  const enrollementRepository = new Enrollment();

  try {
    const userCourses = await enrollementRepository.userEnrolledCourses(userId);
    return userCourses;
  } catch (error) {
    return error;
  }
};

export default getUserCourses;