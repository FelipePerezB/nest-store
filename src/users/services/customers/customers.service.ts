import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto, UpdateCustomerDto } from '../../dtos/customers.dto';

@Injectable()
export class CustomersService {
  private counterId = 1;
  private customers: any[] = [
    {
      name: 'Ropa',
    },
  ];

  findAll() {
    return this.customers;
  }

  findOne(id: number) {
    const product = this.customers.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  create(data: CreateCustomerDto) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...data,
    };
    this.customers.push(newProduct);
    return newProduct;
  }

  update(id: number, changes: UpdateCustomerDto) {
    const product = this.findOne(id);
    const index = this.customers.findIndex((item) => item.id === id);
    this.customers[index] = {
      ...product,
      ...changes,
    };
    return this.customers[index];
  }

  remove(id: number) {
    const index = this.customers.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    this.customers.splice(index, 1);
    return true;
  }
}
