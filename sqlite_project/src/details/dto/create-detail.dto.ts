import { IsString } from "class-validator";

export class CreateDetailDto {

    @IsString()
    details?: string
}
