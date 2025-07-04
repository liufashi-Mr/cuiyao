import { DynamicModule } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core/constants';
import { UserModule } from 'src/modules/user/user.module';
import GlobalExceptionFilter from './exception/global-exception-filter';
import { ProjectModule } from '@modules/project/project.module';
import { ApiModule } from '@/modules/api/api.module';

export class SharedModule {
  static readonly bizModules: DynamicModule[] = [
    UserModule.register(),
    ProjectModule.register(),
    ApiModule.register(),
  ];
  static register(): DynamicModule {
    return {
      global: true,
      module: SharedModule,
      providers: [
        {
          provide: APP_FILTER,
          useClass: GlobalExceptionFilter,
        },
      ],
      imports: [...SharedModule.bizModules],
      exports: [...SharedModule.bizModules],
    };
  }
}
