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
import { FindApiUsecase } from '../domain/usecases/find-api.usecase';
import { CreateApiUsecase } from '../domain/usecases/create-api.usecase';
import { UpdateApiUsecase } from '../domain/usecases/update-api.usecase';
import { DeleteApiUsecase } from '../domain/usecases/delete-api.usecase';
import { FindAllApisUsecase } from '../domain/usecases/find-all-apis.usecase';
import { CreateApiDto } from '../client/dto/create-api.dto';
import { UpdateApiDto } from '../client/dto/update-api.dto';
import { QueryApiDto } from '../client/dto/query-api.dto';

@Controller('apis')
export class ApiController {
  @Inject(FindApiUsecase)
  private readonly findApiUsecase: FindApiUsecase;

  @Inject(CreateApiUsecase)
  private readonly createApiUsecase: CreateApiUsecase;

  @Inject(UpdateApiUsecase)
  private readonly updateApiUsecase: UpdateApiUsecase;

  @Inject(DeleteApiUsecase)
  private readonly deleteApiUsecase: DeleteApiUsecase;

  @Inject(FindAllApisUsecase)
  private readonly findAllApisUsecase: FindAllApisUsecase;

  @Post()
  async create(@Body() createApiDto: CreateApiDto) {
    return this.createApiUsecase.execute(createApiDto);
  }

  @Get()
  async findAll(@Query() queryDto: QueryApiDto) {
    return this.findAllApisUsecase.execute(queryDto);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.findApiUsecase.execute(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateApiDto: UpdateApiDto,
  ) {
    return this.updateApiUsecase.execute(id, updateApiDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.deleteApiUsecase.execute(id);
  }
}
