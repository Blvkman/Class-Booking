import { Injectable, NotFoundException } from '@nestjs/common';
import { BookingDto } from '../bookings/dto/booking.dto';

@Injectable()
export class ClassesService {


    private readonly classes = [
      {
          class_id: "CT01",
          Bookings: []
      },
      {
          class_id: "CT02",
          Bookings: []
      },
      {
          class_id: "CT03",
          Bookings: []
      },
      {
          class_id: "CT04",
          Bookings: []
      },
      {
          class_id: "CT05",
          Bookings: []
      },
      {
          class_id: "CT06",
          Bookings: []
      },
      {
          class_id: "CT13",
          Bookings: []
      },
      {
          class_id: "CT17",
          Bookings: []
      },
      {
          class_id: "CT18",
          Bookings: []
      },
      {
          class_id: "CT19",
          Bookings: []
      },
      {
          class_id: "CT20",
          Bookings: []
      },
      {
          class_id: "CT21",
          Bookings: []
      },
      {
          class_id: "CT22",
          Bookings: []
      },
      {
          class_id: "CTAUD",
          Bookings: []
      },
      {
          class_id: "CP01",
          Bookings: []
      },
      {
          class_id: "CP02",
          Bookings: []
      },
      {
          class_id: "CP03",
          Bookings: []
      },
      {
          class_id: "CP04",
          Bookings: []
      },
      {
          class_id: "CP05",
          Bookings: []
      },
      {
          class_id: "CP06",
          Bookings: []
      },
      {
          class_id: "CP07",
          Bookings: []
      },
      {
          class_id: "CP08",
          Bookings: []
      },
      {
          class_id: "CP09",
          Bookings: []
      },
      {
          class_id: "CP11",
          Bookings: []
      },
      {
          class_id: "CP12",
          Bookings: []
      },
      {
          class_id: "CP13",
          Bookings: []
      },
      {
          class_id: "CP14",
          Bookings: []
      },
      {
          class_id: "CP15",
          Bookings: []
      },
      {
          class_id: "CP16",
          Bookings: []
      },
      {
          class_id: "CP17",
          Bookings: []
      },
      {
          class_id: "CP18",
          Bookings: []
      },
      {
          class_id: "CP19",
          Bookings: []
      },
      {
          class_id: "CP20",
          Bookings: []
      },
      {
          class_id: "CP21",
          Bookings: []
      },
      {
          class_id: "CP23",
          Bookings: []
      },
      {
          class_id: "CP24",
          Bookings: []
      },
      {
          class_id: "CS04",
          Bookings: []
      },
      {
          class_id: "CS05",
          Bookings: []
      },
      {
          class_id: "CS06",
          Bookings: []
      },
      {
          class_id: "CS09",
          Bookings: []
      },
      {
          class_id: "CS10",
          Bookings: []
      },
      {
          class_id: "CS11",
          Bookings: []
      },
      {
          class_id: "CS12",
          Bookings: []
      },
      {
          class_id: "CS13",
          Bookings: []
      },
      {
          class_id: "CS14",
          Bookings: []
      },
      {
          class_id: "GT1",
          Bookings: []
      },
      {
          class_id: "GT2",
          Bookings: []
      },
      {
          class_id: "GT3",
          Bookings: []
      },
      {
          class_id: "GT4",
          Bookings: []
      },
      {
          class_id: "GT5",
          Bookings: []
      },
      {
          class_id: "GP1",
          Bookings: []
      },
      {
          class_id: "GP2",
          Bookings: []
      },
      {
          class_id: "GP3",
          Bookings: []
      },
      {
          class_id: "GP4",
          Bookings: []
      },
      {
          class_id: "GP5",
          Bookings: []
      },
      {
          class_id: "GP6",
          Bookings: []
      },
      {
          class_id: "GP7",
          Bookings: []
      },
      {
          class_id: "GP8",
          Bookings: []
      },
      {
          class_id: "GP9",
          Bookings: []
      },
      {
          class_id: "GP10",
          Bookings: []
      }
    ];
    
    async getAll(): Promise<Object[]> {
        return this.classes;
    }

    async findOne(class_id: string): Promise<Object> {
        return this.classes.find(classe => classe.class_id === class_id);
    }

    async book(booking: BookingDto): Promise<boolean>{
        const query_class = await this.findOne(booking.class_id);
        console.log(typeof query_class);
        if(typeof query_class != "undefined"){
            for(let i = 0; i < this.classes.length; i++){
                if(this.classes[i].class_id === booking.class_id){
                    this.classes[i].Bookings.push(booking);
                    return true;
                }
            }
        }
        
        return false;
    }

}
