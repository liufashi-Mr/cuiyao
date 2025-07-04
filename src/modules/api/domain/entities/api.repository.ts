import { API_REPOSITORY } from 'src/shared/constants/repository';
import { Api } from './api.entity';
import { Provider } from '@nestjs/common';

export const ApiRepository: Provider = {
  provide: API_REPOSITORY,
  useValue: Api,
};
