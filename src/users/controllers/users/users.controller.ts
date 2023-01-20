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
import { CreateUserDto, UpdateUserDto } from 'src/users/dtos/users.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  getAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() payload: CreateUserDto) {
    this.usersService.create(payload);
    return {
      message: 'accion de crear',
      payload,
    };
  }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateUserDto,
  ) {
    const rta = this.usersService.update(id, payload);
    return {
      message: rta,
    };
  }
}
