import { DynamicModule } from '@nestjs/common';
import { TestController } from './test.controller';

export class TestModule {
  static readonly controller = [TestController];

  static register(): DynamicModule {
    return {
      module: TestModule,
      controllers: TestModule.controller,
    };
  }
  //可在此做模块拦截器
  configure() {}
}
