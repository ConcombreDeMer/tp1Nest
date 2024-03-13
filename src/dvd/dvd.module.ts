import { Module } from '@nestjs/common';
import { DvdService } from './dvd.service';

@Module({
  providers: [DvdService],
  exports: [DvdService],
})
export class DvdModule {}
