import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private courseService: CoursesService) { }
  // GET courses
  @Get()
  async getCourses() {
    return await this.courseService.getCourses()
  }
  // Get course by id
  @Get(':id')
  async getCourse(@Param('id') id) {
    return await this.courseService.getCourse(id)
  }
  // Add course
  @Post()
  async addCourse(@Body() createCourseDto: {}) {
    return await this.courseService.addCourse(createCourseDto)
  }
  // Remove the course
  @Delete()
  async deleteCourse(@Query() query) {
    const { id } = query
    return await this.courseService.deleteCourse(id)
  }
}
