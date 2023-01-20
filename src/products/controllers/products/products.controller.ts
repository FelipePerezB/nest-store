import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ProductsService } from 'src/products/services/products/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  getAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.productService.findOne(id);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() payload: any) {
    this.productService.create(payload);
    return {
      message: 'accion de crear',
      payload,
    };
  }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: any) {
    const rta = this.productService.update(id, payload);
    return {
      message: rta,
    };
  }
}
