import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule.register());
  app.setGlobalPrefix('/api/v1');

  app.enableCors({
    origin: 'http://localhost:5173',
    credentials: true,
  });

  // 添加全局 ValidationPipe 配置
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // 启用 transform，让 @Transform 装饰器生效
      whitelist: true, // 只保留 DTO 中定义的属性
      forbidNonWhitelisted: true, // 禁止未定义的属性
    }),
  );

  await app.listen(4090);
}
bootstrap();
