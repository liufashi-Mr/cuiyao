import { DynamicModule } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core/constants';
import { TestModule } from 'src/modules/test/test.module';
import { UserModule } from 'src/modules/user/user.module';
import GlobalExceptionFilter from './exception/global-exception-filter';

export class SharedModule {
  static readonly bizModules: DynamicModule[] = [
    UserModule.register(),
    TestModule.register(),
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
