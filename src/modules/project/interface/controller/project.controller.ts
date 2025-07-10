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
import { FindProjectUsecase } from '../../domain/usecases/find-project.usecase';
import { CreateProjectUsecase } from '../../domain/usecases/create-project.usecase';
import { UpdateProjectUsecase } from '../../domain/usecases/update-project.usecase';
import { DeleteProjectUsecase } from '../../domain/usecases/delete-project.usecase';
import { FindAllProjectsUsecase } from '../../domain/usecases/find-all-projects.usecase';
import { CreateProjectDto } from '../../app/dto/create-project.dto';
import { UpdateProjectDto } from '../../app/dto/update-project.dto';
import { QueryProjectDto } from '../../app/dto/query-project.dto';

@Controller('projects')
export class ProjectController {
  @Inject(FindProjectUsecase)
  private readonly findProjectUsecase: FindProjectUsecase;

  @Inject(CreateProjectUsecase)
  private readonly createProjectUsecase: CreateProjectUsecase;

  @Inject(UpdateProjectUsecase)
  private readonly updateProjectUsecase: UpdateProjectUsecase;

  @Inject(DeleteProjectUsecase)
  private readonly deleteProjectUsecase: DeleteProjectUsecase;

  @Inject(FindAllProjectsUsecase)
  private readonly findAllProjectsUsecase: FindAllProjectsUsecase;

  @Post()
  async create(@Body() createProjectDto: CreateProjectDto) {
    return this.createProjectUsecase.execute(createProjectDto);
  }

  @Get()
  async findAll(@Query() queryDto: QueryProjectDto) {
    return this.findAllProjectsUsecase.execute(queryDto);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.findProjectUsecase.execute(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProjectDto: UpdateProjectDto,
  ) {
    return this.updateProjectUsecase.execute(id, updateProjectDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.deleteProjectUsecase.execute(id);
  }
}
