import { ArrayMinSize, ArrayMaxSize, IsDate, IsArray, IsNotEmpty, IsInt, IsString, Max, MinLength, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';

export class BookingDto {

    //Classe prenotata
    @IsNotEmpty()
    @IsString()
    public class_id: string;

    //Nome del professore che prenota
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(30)
    public teacher_name: string;

    //Motivo della prenotazione
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    public description: string;

    //Data prenotata
    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    public date: Date;

    /*
    Ora/e prenotata/e
    
        Esempi vettore ore:
        prenoto la seconda ora => [2]
        prenoto la prima, la seconda e la quinta ora => [1,2,5]
    */
    @IsNotEmpty()
    @IsArray()
    @IsInt({ each: true })
    @Max(8, {each: true})
    @ArrayMinSize(1)
    @ArrayMaxSize(8)
    public hours: number[];

}