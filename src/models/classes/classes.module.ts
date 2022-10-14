import { Module } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { ClassesController } from './classes.controller';

@Module({
  providers: [ClassesService],
  controllers: [ClassesController]
})
export class ClassesModule {}
