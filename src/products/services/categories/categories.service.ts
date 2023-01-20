import { Injectable, NotFoundException } from '@nestjs/common';
import {
  CreateCategoryDto,
  UpdateCategoryDto,
} from '../../dtos/categories.dto';

@Injectable()
export class CategoriesService {
  private counterId = 1;
  private categories: any[] = [
    {
      name: 'Ropa',
    },
  ];

  findAll() {
    return this.categories;
  }

  findOne(id: number) {
    const product = this.categories.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  create(data: CreateCategoryDto) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...data,
    };
    this.categories.push(newProduct);
    return newProduct;
  }

  update(id: number, changes: UpdateCategoryDto) {
    const product = this.findOne(id);
    const index = this.categories.findIndex((item) => item.id === id);
    this.categories[index] = {
      ...product,
      ...changes,
    };
    return this.categories[index];
  }

  remove(id: number) {
    const index = this.categories.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    this.categories.splice(index, 1);
    return true;
  }
}
