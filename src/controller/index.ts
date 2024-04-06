import registerUser from "./user/Register";
import getProfile from "./user/getProfile";
import updateUser from "./user/updateUser";
import filterCourses from "./courses/filterCourses";
import createCourse from "./courses/createCourse";
import signInUser from "./user/signInUser";
import updateCourseController from "./courses/updateCourse";
import deleteCourseController from "./courses/deleteCourseController";
import createAdmin from "./admin/createAdmin";
import signInAdmin from "./admin/adminLogin";
import { imageUploadController } from "./user/userImage";
import { enrollCourseController } from "./courses/enrolleController";
import userCoursesController from "./user/userCourses";
import resetuserController from "./user/resetPasswordController";
import { resetPasswordController } from "./user/verfyUserOtpController";

export {
  registerUser,
  getProfile,
  updateUser,
  filterCourses,
  createCourse,
  signInUser,
  updateCourseController,
  deleteCourseController,
  createAdmin,
  signInAdmin,
  imageUploadController,
  enrollCourseController,
  userCoursesController,
  resetuserController,
  resetPasswordController
};
