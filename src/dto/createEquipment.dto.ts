import { STATUS } from "@prisma/client";
import { IsEnum, IsNotEmpty, Length } from "class-validator";


export class CreateEquipmentDTO {
    @IsNotEmpty()
    @Length(2, 70)
    name!: string;

    @IsNotEmpty()
    description!: string;

    @IsNotEmpty()
    duration!: number;

    @IsNotEmpty()
    price!: number;

    @IsNotEmpty()
    @IsEnum(STATUS)
    status!: STATUS


}