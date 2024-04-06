import express,{ Router } from "express";
import { isAdminAuthed } from "../../middleware/adminAuth";
import { isUserAuthed } from "../../middleware/userAuth";
import {
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
} from "../../controller";
import upload from "../../middleware/multerUserImage";

const router: Router = express.Router();

router.post("/admin/course", isAdminAuthed, createCourse);
router.put("/admin/update", isAdminAuthed, updateCourseController);
router.get("/admin/course", isAdminAuthed, filterCourses);
router.delete("/admin/course/:courseId", isAdminAuthed, deleteCourseController);
router.post("/admin/createAdmin", isAdminAuthed, createAdmin);
router.post("/admin/signin", signInAdmin);

router.post("/signin", signInUser);
router.post("/register", registerUser);
router.get("/profile", isUserAuthed, getProfile);
router.put("/profile", isUserAuthed, updateUser);
router.get("/course", isUserAuthed, filterCourses);
router.post("/enroll/:courseId", isUserAuthed, enrollCourseController);
router.get("/reset",  resetuserController);
router.post("/verify",  resetPasswordController);


router.post(
  "/image",
  isUserAuthed,
  upload.single("image"),
  imageUploadController
);

export default router;
