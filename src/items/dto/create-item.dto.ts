import { IsNotEmpty, IsNumber, Max, Min } from 'class-validator';

export class CreateItemDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  description: string;
}
