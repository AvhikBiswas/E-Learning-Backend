import express, { Router } from "express";
import registerUser from "../../controller/Register";
import getProfile from "../../controller/getProfile";
import updateUser from "../../controller/updateUser";
import filterCourses from "../../controller/filterCourses";
import createCourse from "../../controller/createCourse";

const router: Router = express.Router();

router.post("/register", registerUser);
router.get("/profile", getProfile);
router.put("/profile", updateUser);
router.get("/course", filterCourses);
router.post("/course", createCourse);

export default router;
