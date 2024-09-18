import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule.register());
  app.setGlobalPrefix('/api/v1');
  await app.listen(4090);
}
bootstrap();
