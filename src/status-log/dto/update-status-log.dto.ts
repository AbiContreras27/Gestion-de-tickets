import { PartialType } from '@nestjs/mapped-types';
import { CreateStatusLogDto } from './create-status-log.dto';

export class UpdateStatusLogDto extends PartialType(CreateStatusLogDto) {}
