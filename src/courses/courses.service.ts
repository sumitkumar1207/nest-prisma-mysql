import { Injectable } from '@nestjs/common';
import { Course, Prisma } from '@prisma/client';
import { DBService } from 'src/db/db.service';

@Injectable()
export class CoursesService {
  constructor(private dbService: DBService) { }

  // Get the courses
  async getCourses(skip: number, take: number): Promise<Course[] | []> {
    return await this.dbService.course.findMany({ skip, take })
  }

  // Get the course
  async getCourse(id: Prisma.CourseWhereUniqueInput): Promise<Course | null> {
    // Parse to Number
    const courseId = Number(id)
    return this.dbService.course.findUnique({ where: { id: courseId } })
  }
  // Add the course
  async addCourse(course: Prisma.CourseCreateInput): Promise<Course> {
    return await this.dbService.course.create({ data: course })
  }
  // Delete the course
  async deleteCourse(id: Prisma.CourseWhereUniqueInput): Promise<Course | null> {
    const courseId = Number(id)
    return await this.dbService.course.delete({ where: { id: courseId } })
  }
  // Update the course 
  async updateCourse(params: { where: Prisma.CourseWhereUniqueInput, data: Prisma.CourseUpdateInput }): Promise<Course> {
    const { where, data } = params
    return await this.dbService.course.update({ data, where })
  }
}
