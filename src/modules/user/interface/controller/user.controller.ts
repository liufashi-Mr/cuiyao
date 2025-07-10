import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
  ParseIntPipe,
  Inject,
} from '@nestjs/common';
import { FindUserUsecase } from '../../app/usecases/find-user.usecase';
import { CreateUserUsecase } from '../../app/usecases/create-user.usecase';
import { UpdateUserUsecase } from '../../app/usecases/update-user.usecase';
import { DeleteUserUsecase } from '../../app/usecases/delete-user.usecase';
import { FindAllUsersUsecase } from '../../app/usecases/find-all-users.usecase';
import { CreateUserDto } from '../../app/dto/create-user.dto';
import { UpdateUserDto } from '../../app/dto/update-user.dto';
import { QueryUserDto } from '../../app/dto/query-user.dto';

@Controller('users')
export class UserController {
  @Inject(FindUserUsecase)
  private readonly findUserUsecase: FindUserUsecase;

  @Inject(CreateUserUsecase)
  private readonly createUserUsecase: CreateUserUsecase;

  @Inject(UpdateUserUsecase)
  private readonly updateUserUsecase: UpdateUserUsecase;

  @Inject(DeleteUserUsecase)
  private readonly deleteUserUsecase: DeleteUserUsecase;

  @Inject(FindAllUsersUsecase)
  private readonly findAllUsersUsecase: FindAllUsersUsecase;

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.createUserUsecase.execute(createUserDto);
  }

  @Get()
  async findAll(@Query() queryDto: QueryUserDto) {
    return this.findAllUsersUsecase.execute(queryDto);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.findUserUsecase.execute(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.updateUserUsecase.execute(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.deleteUserUsecase.execute(id);
  }
}
