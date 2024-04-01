import express, { Request, Response } from "express";
import apiRoutes from "./routes/index";

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use("/api", apiRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
