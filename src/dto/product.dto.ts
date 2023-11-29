import { MinLength, IsNotEmpty, IsNumber } from 'class-validator';
export class ProductDto {
  @IsNotEmpty()
  categoryId?: number;
  @MinLength(5, { message: 'this field must be 5 than character !' })
  productName?: string;
  @IsNumber()
  price?: number;
}
