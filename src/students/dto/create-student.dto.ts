import { IsInt, IsString, IsOptional, Max, MaxLength, Min } from "class-validator";


export class CreateStudentDto {
    @IsString()
    @MaxLength(50)
    name: string;

    @IsInt()
    @Min(1)
    age: number;

    @IsOptional()
    @IsString()
    country: string;
}
