import { DynamicModule } from '@nestjs/common';
import { DatabaseModule } from './shared/database/database.module';
import { SharedModule } from './shared/shared.module';

export class AppModule {
  static readonly sysModules = [DatabaseModule];
  static register(): DynamicModule {
    return {
      module: AppModule,
      imports: [...AppModule.sysModules, SharedModule.register()],
    };
  }
}
