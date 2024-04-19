import { IsEnum, MinLength } from 'class-validator';

export class CreateProductsDto {
  @MinLength(3)
  name: string;

  @MinLength(3)
  description: string;

  @MinLength(3)
  price: string;

  @MinLength(3)
  sku: string;

  @IsEnum(['Toy', 'Laptop'], { message: 'Use the correct category' })
  category: 'Toy' | 'Laptop';

  quantity: number;

  @MinLength(3)
  image: string;

  @MinLength(3)
  weight: string;

  @MinLength(3)
  dimension: string;
}
