import express, { Router } from "express";
import registerUser from "../../controller/Register";
import getProfile from "../../controller/getProfile";
import updateUser from "../../controller/updateUser";
import filterCourses from "../../controller/filterCourses";
import createCourse from "../../controller/createCourse";
import signInUser from "../../controller/signInUser";
import { isAuthenticated } from "../../middleware/authMiddleware";
import updateCourseController from "../../controller/updateCourse";
import deleteCourseController from "../../controller/deleteCourseController";
import createAdmin from "../../controller/createAdmin";

const router: Router = express.Router();

router.post("/admin/course", createCourse);
router.put("/admin/update", updateCourseController);
router.get("/admin/course", isAuthenticated, filterCourses);
router.delete("/admin/course/:courseId", deleteCourseController);
router.post("/admin/createAdmin",createAdmin);


router.post("/signin", signInUser);
router.post("/register", registerUser);
router.get("/profile", isAuthenticated, getProfile);
router.put("/profile", isAuthenticated, updateUser);
router.get("/course", isAuthenticated, filterCourses);


export default router;
