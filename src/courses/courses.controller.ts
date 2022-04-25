import { Body, Controller, Delete, Get, HttpCode, Param, Post, Query } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private courseService: CoursesService) { }
  // GET courses
  @Get()
  async getCourses(@Query() query) {
    const { skip = 0, take = 5 } = query
    return await this.courseService.getCourses(Number(skip), Number(take))
  }
  // Get course by id
  @Get(':id')
  async getCourse(@Param('id') id) {
    return await this.courseService.getCourse(id)
  }
  // Add course
  @Post()
  @HttpCode(201)
  async addCourse(@Body() createCourseDto) {
    // : { title: string, description: string, author: string, url: string }
    return await this.courseService.addCourse(createCourseDto)
  }
  // Remove the course
  @Delete()
  async deleteCourse(@Query() query) {
    const { id } = query
    return await this.courseService.deleteCourse(id)
  }
}
