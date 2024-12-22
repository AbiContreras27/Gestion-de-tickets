import { Module } from '@nestjs/common';
import { StatusLogService } from './status-log.service';
import { StatusLogController } from './status-log.controller';

@Module({
  controllers: [StatusLogController],
  providers: [StatusLogService],
})
export class StatusLogModule {}
