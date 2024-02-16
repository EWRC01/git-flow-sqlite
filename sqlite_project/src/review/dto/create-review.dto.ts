import { IsNotEmpty, IsString } from "class-validator";

export class CreateReviewDto {

    @IsString()
    @IsNotEmpty()
    comment?: string
}
