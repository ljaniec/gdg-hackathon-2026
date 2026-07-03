import { Module } from '@nestjs/common';
import { TaskAllocationController } from './task-allocation.controller';
import { TaskAllocationService } from './task-allocation.service';

@Module({
  controllers: [TaskAllocationController],
  providers: [TaskAllocationService],
})
export class TaskAllocationModule {}
