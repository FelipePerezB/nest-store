import { Module } from '@nestjs/common';
import { BrandsController } from 'src/products/controllers/brands/brands.controller';
import { CategoriesController } from 'src/products/controllers/categories/categories.controller';
import { ProductsController } from 'src/products/controllers/products/products.controller';
import { BrandsService } from 'src/products/services/brands/brands.service';
import { CategoriesService } from 'src/products/services/categories/categories.service';
import { ProductsService } from 'src/products/services/products/products.service';
@Module({
  exports: [ProductsService],
  controllers: [ProductsController, CategoriesController, BrandsController],
  providers: [ProductsService, CategoriesService, BrandsService],
})
export class ProductsModule {}
