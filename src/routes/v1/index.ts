import express, { Router } from "express";
import registerUser from "../../controller/Register";
import getProfile from "../../controller/getProfile";

const router: Router = express.Router();

router.post("/register", registerUser);
router.get("/profile", getProfile);

export default router;
