import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { logger } from './common/middleware/logger.middleware';
import { CatsController } from './cats/cats.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo/todo.module';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    CatsModule,
    MongooseModule.forRoot('mongodb://localhost/nest'),
    TodoModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)
      .exclude(
        { path: 'cats', method: RequestMethod.GET },
        { path: 'cats', method: RequestMethod.POST },
      )
      .forRoutes(CatsController);
  }
}
