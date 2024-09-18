import { USER_REPOSITORY } from 'src/shared/constants/repository';
import { User } from './user.entity';
import { Provider } from '@nestjs/common';

export const UserRepository: Provider = {
  provide: USER_REPOSITORY,
  useValue: User,
};
