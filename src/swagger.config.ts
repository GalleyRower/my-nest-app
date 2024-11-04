import { Injectable } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

@Injectable()
export class SwaggerConfigService {
  getSwaggerConfig(): DocumentBuilder {
    return new DocumentBuilder()
      .setTitle('My NestJS API')
      .setDescription('API documentation for my NestJS application')
      .setVersion('1.0')
      .addTag('user') // Добавляем тег для группировки документации
      .addBearerAuth() // Добавляем авторизацию Bearer (для JWT)
      .build();
  }

  getSwaggerDocument(app): any {
    const options = this.getSwaggerConfig();
    return SwaggerModule.createDocument(app, options);
  }

  setupSwagger(app, document) {
    const config = this.getSwaggerConfig();
    SwaggerModule.setup('api', app, document, config);
  }
}