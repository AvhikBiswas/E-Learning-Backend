import express, { Router } from "express";
import registerUser from "../../controller/Register";

const router:Router=express.Router();

router.post('/register',registerUser);

export default router;