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
import { CustomersService } from 'src/users/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customerService: CustomersService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  getAll() {
    return this.customerService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.customerService.findOne(id);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() payload: any) {
    this.customerService.create(payload);
    return {
      message: 'accion de crear',
      payload,
    };
  }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: any) {
    const rta = this.customerService.update(id, payload);
    return {
      message: rta,
    };
  }
}
