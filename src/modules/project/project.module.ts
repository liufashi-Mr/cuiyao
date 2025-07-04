import { DynamicModule, Module, Provider } from '@nestjs/common';
import { ProjectController } from './interface/project.controller';
import { FindProjectUsecase } from './domain/usecases/find-project.usecase';
import { CreateProjectUsecase } from './domain/usecases/create-project.usecase';
import { UpdateProjectUsecase } from './domain/usecases/update-project.usecase';
import { DeleteProjectUsecase } from './domain/usecases/delete-project.usecase';
import { FindAllProjectsUsecase } from './domain/usecases/find-all-projects.usecase';
import { FindAllProjectsService } from './domain/services/find-all-projects.service';
import { FindProjectService } from './domain/services/find-project.service';
import { CreateProjectService } from './domain/services/create-project.service';
import { UpdateProjectService } from './domain/services/update-project.service';
import { DeleteProjectService } from './domain/services/delete-project.service';
import { ProjectRepository } from './domain/entities/project.repository';

@Module({})
export class ProjectModule {
  static readonly controller = [ProjectController];

  static readonly service: Provider[] = [
    FindAllProjectsService,
    FindProjectService,
    CreateProjectService,
    UpdateProjectService,
    DeleteProjectService,
    ProjectRepository,
  ];

  static readonly usecase: Provider[] = [
    FindProjectUsecase,
    CreateProjectUsecase,
    UpdateProjectUsecase,
    DeleteProjectUsecase,
    FindAllProjectsUsecase,
  ];

  static register(): DynamicModule {
    return {
      module: ProjectModule,
      controllers: [...ProjectModule.controller],
      providers: [...ProjectModule.service, ...ProjectModule.usecase],
      exports: [...ProjectModule.service, ...ProjectModule.usecase],
    };
  }
}
