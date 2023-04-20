import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerDocumentOptions,
} from '@nestjs/swagger';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v2');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  /* ======= LOAD CONFIG .ENV.* ======= */
  const env: ConfigService<Record<string, unknown>> = app.get(ConfigService);
  // Swagger documentation setup
  const config = new DocumentBuilder()
    .setTitle('Pokedex apisolutions')
    .setDescription('The Pokedex API description')
    .setVersion('1.0')
    .addTag('pokedex')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  // Run api listen
  await app.listen(env.get<number>('api.port'), '0.0.0.0');
  logger.log(`Pokedex-Apisolutions App running on port ${process.env.PORT}`);
  /* ======= DOCS GENERATE ======= */
  if (process.env.NODE_ENV !== 'production') {
    logger.debug(
      `Swagger document generated ${await app.getUrl()}/api`,
      'Swagger',
    );
  }
}
bootstrap();
