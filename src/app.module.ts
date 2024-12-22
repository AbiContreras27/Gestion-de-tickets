import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { NotificationModule } from './notification/notification.module';
import { CategoryModule } from './category/category.module';
import { TicketModule } from './ticket/ticket.module';
import { SubCategoryModule } from './sub-category/sub-category.module';
import { StatusLogModule } from './status-log/status-log.module';
import { AttachmentModule } from './attachment/attachment.module';

@Module({
  imports: [UsersModule, NotificationModule, CategoryModule, TicketModule, SubCategoryModule, StatusLogModule, AttachmentModule],
  controllers: [],
  providers: [],
})

export class AppModule { }
