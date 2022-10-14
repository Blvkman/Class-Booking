import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { BookingDto } from '../bookings/dto/booking.dto';

@Controller('classes')
export class ClassesController {

    constructor(private classesService: ClassesService) {}

    //Ritorna la lista completa delle classi
    @Get()
    findAll() {
        return this.classesService.getAll();
    }

    //Ritorna una singola classe
    @Get(':classId')
    async findOne(@Param('classId') classId: string){

        //Fetcha la classe richiesta usando classId
        const query_class = await this.classesService.findOne(classId);

        //Controlla se la classe richiesta esiste
        if(query_class){

            //Se esiste ritorna la classe richiesta
            return query_class;
        } else {

            //Se non esiste ritorna l'eccezione `404 Not Found`
            return new NotFoundException();
        }
    }

    //Prenota una classe
    @Post('booking')
    book(@Body() body: BookingDto) {
        if(this.classesService.book(body)){
            return {status: true, message: `Class ${body.class_id} has been booked.`};
        } else {
            return new NotFoundException()
        }
    }

}
