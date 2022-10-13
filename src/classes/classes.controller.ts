import { Controller, Get, Inject, Post, Res } from '@nestjs/common';
import { ClassesService } from './classes.service';

@Controller('classes')
export class ClassesController {

    constructor(private classesService: ClassesService) {}

    @Get()
    findAll() {
        return this.classesService.getAll();
    }

}
