import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, IsOptional } from "class-validator";

export class CreateProductDto {



    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    title: string;


    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    description?: string;


    @ApiPropertyOptional()
    @IsNumber()
    @IsOptional()
    price?: number;
}
