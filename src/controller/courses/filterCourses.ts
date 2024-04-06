import { Request, Response } from "express";
import filterCourse from "../../service/filterCourse";


const filterCourses = async (req: Request, res: Response) => {
  try {
    const filters = req.query;
    const paginationOptions = {
      skip: parseInt(req.query.skip as string) || 0,
      take: parseInt(req.query.take as string) || 10,
    };
    const courses = await filterCourse(filters, paginationOptions);
    return res.status(200).json({ success: true, data: courses });
  } catch (error) {
    return res.status(500).json({ success: false, error: error });
  }
};

export default filterCourses;
