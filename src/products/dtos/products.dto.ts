import { PartialType } from '@nestjs/swagger';

export class CreateProductDto {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly stock: number;
  readonly image: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
