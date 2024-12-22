import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { NotificationModule } from './notification/notification.module';
import { CategoryModule } from './category/category.module';
import { TicketModule } from './ticket/ticket.module';

@Module({
  imports: [UsersModule, NotificationModule, CategoryModule, TicketModule],
  controllers: [],
  providers: [],
})

export class AppModule { }
