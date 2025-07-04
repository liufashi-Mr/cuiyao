import { PROJECT_REPOSITORY } from 'src/shared/constants/repository';
import { Project } from './project.entity';
import { Provider } from '@nestjs/common';

export const ProjectRepository: Provider = {
  provide: PROJECT_REPOSITORY,
  useValue: Project,
};
