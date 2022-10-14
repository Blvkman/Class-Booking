import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClassesModule } from './models/classes/classes.module';
import { BookingsModule } from './models/bookings/bookings.module';

@Module({
  imports: [ClassesModule, BookingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
