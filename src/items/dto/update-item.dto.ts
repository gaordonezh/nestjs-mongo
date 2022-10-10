import { IsNotEmpty, IsNumber, Max, Min } from 'class-validator';

export class UpdateItemDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  description: string;
}
