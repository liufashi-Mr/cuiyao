import { DynamicModule, Module, Provider } from '@nestjs/common';
import { ApiController } from './interface/api.controller';
import { FindApiUsecase } from './domain/usecases/find-api.usecase';
import { CreateApiUsecase } from './domain/usecases/create-api.usecase';
import { UpdateApiUsecase } from './domain/usecases/update-api.usecase';
import { DeleteApiUsecase } from './domain/usecases/delete-api.usecase';
import { FindAllApisUsecase } from './domain/usecases/find-all-apis.usecase';
import { FindAllApisService } from './domain/services/find-all-apis.service';
import { FindApiService } from './domain/services/find-api.service';
import { CreateApiService } from './domain/services/create-api.service';
import { UpdateApiService } from './domain/services/update-api.service';
import { DeleteApiService } from './domain/services/delete-api.service';
import { ApiRepository } from './domain/entities/api.repository';

@Module({})
export class ApiModule {
  static readonly controller = [ApiController];

  static readonly service: Provider[] = [
    FindAllApisService,
    FindApiService,
    CreateApiService,
    UpdateApiService,
    DeleteApiService,
    ApiRepository,
  ];

  static readonly usecase: Provider[] = [
    FindApiUsecase,
    CreateApiUsecase,
    UpdateApiUsecase,
    DeleteApiUsecase,
    FindAllApisUsecase,
  ];

  static register(): DynamicModule {
    return {
      module: ApiModule,
      controllers: [...ApiModule.controller],
      providers: [...ApiModule.service, ...ApiModule.usecase],
      exports: [...ApiModule.service, ...ApiModule.usecase],
    };
  }
}
