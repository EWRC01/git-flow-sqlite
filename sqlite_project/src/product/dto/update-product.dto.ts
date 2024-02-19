import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { CreateProductDto } from './create-product.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {


    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    title?: string;


    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    description?: string;


    @ApiPropertyOptional()
    @IsNumber()
    @IsOptional()
    price?: number;
}
