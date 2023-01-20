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
import { BrandsService } from 'src/products/services/brands/brands.service';

@Controller('brands')
export class BrandsController {
  constructor(private brandService: BrandsService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  getAll() {
    return this.brandService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.brandService.findOne(id);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() payload: any) {
    this.brandService.create(payload);
    return {
      message: 'accion de crear',
      payload,
    };
  }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: any) {
    const rta = this.brandService.update(id, payload);
    return {
      message: rta,
    };
  }
}
