import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  app.useStaticAssets('views');
  app.setBaseViewsDir('views');
  app.setViewEngine('pug');
  
  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:5000', 'http://localhost:404'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  });

  const port = process.env.PORT || 404;

  await app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
  });
}
bootstrap();
