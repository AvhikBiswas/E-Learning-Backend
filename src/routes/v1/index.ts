import express, { Router } from "express";
import registerUser from "../../controller/Register";
import getProfile from "../../controller/getProfile";
import updateUser from "../../controller/updateUser";


const router: Router = express.Router();

router.post("/register", registerUser);
router.get("/profile", getProfile);
router.put("/profile",updateUser);

export default router;