import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../../dtos/users.dto';

@Injectable()
export class UsersService {
  private counterId = 1;
  private users: any[] = [
    {
      id: 1,
      name: 'Felipe',
      email: 'felipeeperez3@gmail.com',
      password: 'admin123',
      role: 'admin',
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const product = this.users.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  create(data: CreateUserDto) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...data,
    };
    this.users.push(newProduct);
    return newProduct;
  }

  update(id: number, changes: UpdateUserDto) {
    const product = this.findOne(id);
    const index = this.users.findIndex((item) => item.id === id);
    this.users[index] = {
      ...product,
      ...changes,
    };
    return this.users[index];
  }

  remove(id: number) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    this.users.splice(index, 1);
    return true;
  }
}
