import { DynamicModule } from '@nestjs/common';
import { TestModule } from 'src/modules/test/test.module';
import { UserModule } from 'src/modules/user/user.module';

export class SharedModule {
  static readonly bizModules: DynamicModule[] = [
    UserModule.register(),
    TestModule.register(),
  ];
  static register(): DynamicModule {
    return {
      global: true,
      module: SharedModule,
      imports: [...SharedModule.bizModules],
      exports: [...SharedModule.bizModules],
    };
  }
}
