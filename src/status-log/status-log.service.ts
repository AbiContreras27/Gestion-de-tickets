import { Injectable } from '@nestjs/common';
import { CreateStatusLogDto } from './dto/create-status-log.dto';
import { UpdateStatusLogDto } from './dto/update-status-log.dto';

@Injectable()
export class StatusLogService {
  create(createStatusLogDto: CreateStatusLogDto) {
    return 'This action adds a new statusLog';
  }

  findAll() {
    return `This action returns all statusLog`;
  }

  findOne(id: number) {
    return `This action returns a #${id} statusLog`;
  }

  update(id: number, updateStatusLogDto: UpdateStatusLogDto) {
    return `This action updates a #${id} statusLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} statusLog`;
  }
}
