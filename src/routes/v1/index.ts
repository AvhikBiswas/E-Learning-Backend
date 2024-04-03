import express, { Router } from "express";
import registerUser from "../../controller/Register";
import getProfile from "../../controller/getProfile";
import updateUser from "../../controller/updateUser";
import filterCourses from "../../controller/filterCourses";
import createCourse from "../../controller/createCourse";
import signInUser from "../../controller/signInUser";
import { isAuthenticated } from "../../middleware/authMiddleware";

const router: Router = express.Router();



router.post("/register", registerUser);
router.get("/profile", isAuthenticated, getProfile);
router.put("/profile", isAuthenticated, updateUser);
router.get("/course", isAuthenticated, filterCourses);
router.post("/course", isAuthenticated, createCourse);
router.post("/signin", signInUser);

export default router;
