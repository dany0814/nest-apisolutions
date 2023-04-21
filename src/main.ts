import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initSwagger } from './app.swagger';
import fastifyHelmet from '@fastify/helmet';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  app.enableCors();
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
  /* ======= INIT DOC SWAGGER ======= */
  if (process.env.NODE_ENV !== 'production') {
    initSwagger(app);
  }
  // Run api listen
  await app.listen(process.env.PORT, '0.0.0.0');
  logger.log(`Pokedex-Apisolutions App running on port ${process.env.PORT}`);
  /* ======= DOCS GENERATE ======= */
  if (process.env.NODE_ENV !== 'production') {
    logger.debug(
      `Swagger document generated ${await app.getUrl()}/api/docs`,
      'Swagger',
    );
  }
}
bootstrap();
