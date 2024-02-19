import { PartialType } from '@nestjs/mapped-types';
import { CreateDetailDto } from './create-detail.dto';
import { IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateDetailDto extends PartialType(CreateDetailDto) {


    @ApiPropertyOptional()
    @IsString()
    details?: string;
}
