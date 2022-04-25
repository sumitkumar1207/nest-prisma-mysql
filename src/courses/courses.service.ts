import { Injectable } from '@nestjs/common';
import { Course, Prisma } from '@prisma/client';
import { DBService } from 'src/db/db.service';

@Injectable()
export class CoursesService {
  constructor(private dbService: DBService) { }

  // Get the courses
  async getCourses(): Promise<any> {
    return new Promise(resolve => {
      resolve("Get courses from the service file function...")
    })
  }

  // Get the course
  async getCourse(id: Prisma.CourseWhereUniqueInput): Promise<Course | null> {
    // Parse to Number
    const courseId = Number(id)
    return this.dbService.course.findUnique({ where: { id: courseId } })
  }
  // Add the course
  addCourse(course: any): Promise<any> {
    return new Promise(resolve => {
      resolve("Add course from the service file function..." + JSON.stringify(course))
    })
  }
  // Delete the course
  deleteCourse(id: string): Promise<any> {
    return new Promise(resolve => {
      resolve("Delete course from the service file function..." + Number(id))
    })
  }

}
