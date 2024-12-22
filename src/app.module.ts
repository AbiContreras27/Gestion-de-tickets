import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { NotificationModule } from './notification/notification.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [UsersModule, NotificationModule, CategoryModule],
  controllers: [],
  providers: [],
})

export class AppModule { }
