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
import { CreateCategoryDto } from 'src/products/dtos/categories.dto';
import { CategoriesService } from 'src/products/services/categories/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  getAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.findOne(id);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() payload: CreateCategoryDto) {
    this.categoriesService.create(payload);
    return {
      message: 'accion de crear',
      payload,
    };
  }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: any) {
    const rta = this.categoriesService.update(id, payload);
    return {
      message: rta,
    };
  }
}
