import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StatusLogService } from './status-log.service';
import { CreateStatusLogDto } from './dto/create-status-log.dto';
import { UpdateStatusLogDto } from './dto/update-status-log.dto';

@Controller('status-log')
export class StatusLogController {
  constructor(private readonly statusLogService: StatusLogService) {}

  @Post()
  create(@Body() createStatusLogDto: CreateStatusLogDto) {
    return this.statusLogService.create(createStatusLogDto);
  }

  @Get()
  findAll() {
    return this.statusLogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statusLogService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStatusLogDto: UpdateStatusLogDto) {
    return this.statusLogService.update(+id, updateStatusLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.statusLogService.remove(+id);
  }
}
