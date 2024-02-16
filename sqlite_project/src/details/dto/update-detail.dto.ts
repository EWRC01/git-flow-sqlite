import { PartialType } from '@nestjs/mapped-types';
import { CreateDetailDto } from './create-detail.dto';
import { IsString } from 'class-validator';

export class UpdateDetailDto extends PartialType(CreateDetailDto) {

    @IsString()
    details?: string;
}
