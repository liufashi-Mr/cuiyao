import { DynamicModule, Module, Provider } from '@nestjs/common';
import { UserController } from './interface/controller/user.controller';
import { FindUserUsecase } from './app/usecases/find-user.usecase';
import { CreateUserUsecase } from './app/usecases/create-user.usecase';
import { UpdateUserUsecase } from './app/usecases/update-user.usecase';
import { DeleteUserUsecase } from './app/usecases/delete-user.usecase';
import { FindAllUsersUsecase } from './app/usecases/find-all-users.usecase';
import { FindAllUsersService } from './domain/services/find-all-users.service';
import { FindUserService } from './domain/services/find-user.service';
import { CreateUserService } from './domain/services/create-user.service';
import { UpdateUserService } from './domain/services/update-user.service';
import { DeleteUserService } from './domain/services/delete-user.service';
import { UserRepository } from './domain/entities/user.repository';

@Module({})
export class UserModule {
  static readonly controller = [UserController];

  static readonly service: Provider[] = [
    FindAllUsersService,
    FindUserService,
    CreateUserService,
    UpdateUserService,
    DeleteUserService,
    UserRepository,
  ];

  static readonly usecase: Provider[] = [
    FindUserUsecase,
    CreateUserUsecase,
    UpdateUserUsecase,
    DeleteUserUsecase,
    FindAllUsersUsecase,
  ];

  static register(): DynamicModule {
    return {
      module: UserModule,
      controllers: [...UserModule.controller],
      providers: [...UserModule.service, ...UserModule.usecase],
      exports: [...UserModule.service, ...UserModule.usecase],
    };
  }
}
