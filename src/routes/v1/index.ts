import express, { Router } from "express";
import registerUser from "../../controller/Register";
import getProfile from "../../controller/getProfile";
import updateUser from "../../controller/updateUser";
import filterCourses from "../../controller/filterCourses";
import createCourse from "../../controller/createCourse";
import signInUser from "../../controller/signInUser";
import updateCourseController from "../../controller/updateCourse";
import deleteCourseController from "../../controller/deleteCourseController";
import createAdmin from "../../controller/createAdmin";
import { isAdminAuthed } from "../../middleware/adminAuth";
import { isUserAuthed } from "../../middleware/userAuth";
import signInAdmin from "../../controller/adminLogin";
import { imageUploadController } from "../../controller/userImage";
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
router.post("/image",isUserAuthed,upload.single('image'),imageUploadController);


export default router;
