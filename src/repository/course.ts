import { prismaClient } from "../db";
import { CourseFilter, CoursePayload, CourseUpdatePayload, PaginationOptions } from "../types/Course";

class Course {
  async createCourse(courseData: CoursePayload) {
    try {
      const newCourse = await prismaClient.course.create({
        data: {
          title: courseData.title,
          category: courseData.category,
          level: courseData.level,
          popularity: courseData.popularity!,
        },
      });
      return newCourse;
    } catch (error) {
      return error;
    }
  }

  async findCourseById(courseId: string) {
    try {
      const data = await prismaClient.course.findUnique({
        where: { id: courseId },
      });
      return data;
    } catch (error) {
      return error;
    }
  }

  async findAllCourse(page: number, pageSize: number) {
    try {
      const data = await prismaClient.course.findMany({
        skip: (page - 1) * pageSize,
        take: pageSize, 
      });
      return data;
    } catch (error) {
      return error;
    }
  }
  async findAllCoursesFilter(filters: CourseFilter, paginationOptions: PaginationOptions) {
    try {
      const courses = await prismaClient.course.findMany({
        where: {
          category: filters?.category,
          level: filters?.level,
        },
        orderBy: {
          popularity: filters?.popularity || 'desc',
        },
        skip: paginationOptions.skip || 0,
        take: paginationOptions.take || 10,
      });
      return courses;
    } catch (error) {
      throw new Error(`Error fetching courses: ${error}`);
    }
  }

  async updateCourse(courseUpdate: CourseUpdatePayload) {
    try {
      const updatedCourse = await prismaClient.course.update({
        where: { id: courseUpdate.id },
        data: {
          title: courseUpdate?.newTitle,
          category: courseUpdate?.newCategory,
          level: courseUpdate?.newLevel,
          popularity: courseUpdate?.newPopularity,
        },
      });
      return updatedCourse;
    } catch (error) {
      return error;
    }
  }

  async deleteCourse(courseId: string) {
    try {
      const data = await prismaClient.course.delete({
        where: { id: courseId },
      });
      return data;
    } catch (error) {
      return error;
    }
  }
}

export default Course;
