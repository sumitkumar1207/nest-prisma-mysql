import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query } from '@nestjs/common';
import { Course } from '@prisma/client';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private courseService: CoursesService) { }
  // GET courses
  @Get()
  async getCourses(@Query() query): Promise<Course[]> {
    const { skip = 0, take = 5 } = query
    return await this.courseService.getCourses(Number(skip), Number(take))
  }
  // Get course by id
  @Get(':id')
  async getCourse(@Param('id') id): Promise<Course> {
    return await this.courseService.getCourse(id)
  }
  // Add course
  @Post()
  @HttpCode(201)
  async addCourse(@Body() createCourseDto): Promise<Course> {
    // : { title: string, description: string, author: string, url: string }
    return await this.courseService.addCourse(createCourseDto)
  }
  // Remove the course
  @Delete()
  async deleteCourse(@Query() query): Promise<Course> {
    const { id } = query
    return await this.courseService.deleteCourse(id)
  }
  // Update the course info
  @Put(":id")
  async updateCourse(@Param() params, @Body() updateCourseDTO): Promise<Course> {
    const { id } = params
    return await this.courseService.updateCourse({
      where: { id: Number(id) },
      data: updateCourseDTO
    })
  }
}
