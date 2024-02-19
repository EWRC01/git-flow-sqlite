import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateReviewDto {

    @ApiPropertyOptional()
    @IsString()
    @IsNotEmpty()
    comment?: string
}
