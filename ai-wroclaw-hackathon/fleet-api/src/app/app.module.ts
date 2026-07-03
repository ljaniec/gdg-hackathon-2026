import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskAllocationModule } from './task-allocation/task-allocation.module';

@Module({
  imports: [TaskAllocationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
