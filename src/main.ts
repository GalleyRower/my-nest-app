import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerConfigService } from './swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(SwaggerConfigService);
  const document = configService.getSwaggerDocument(app);
  configService.setupSwagger(app, document);

  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();