import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesController } from './courses/courses.controller';
import { CoursesModule } from './courses/courses.module';
import { CoursesService } from './courses/courses.service';
import { DBService } from './db/db.service';

@Module({
  // imports: [CoursesModule],
  imports: [],
  controllers: [AppController, CoursesController],
  providers: [AppService, CoursesService, DBService],
})
export class AppModule { }
