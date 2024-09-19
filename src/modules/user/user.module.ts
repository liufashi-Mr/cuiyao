import { DynamicModule, NestModule, Provider } from '@nestjs/common';
import { FindAllUsersService } from './domain/services/find-all-users-service';
import { UserController } from './interface/user.controller';
import { UserRepository } from './domain/entities/user.repository';
import { CreateUserService } from './domain/services/create-user-service';

export class UserModule implements NestModule {
  static readonly controller = [UserController];

  static readonly service: Provider[] = [
    FindAllUsersService,
    CreateUserService,
  ];

  static readonly entities: Provider[] = [UserRepository];

  static register(): DynamicModule {
    return {
      module: UserModule,
      providers: [...UserModule.service, ...UserModule.entities],
      controllers: UserModule.controller,
      exports: [...UserModule.service],
    };
  }
  //可在此做模块拦截器
  configure() {}
}
