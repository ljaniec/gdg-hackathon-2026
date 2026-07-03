import { Test, TestingModule } from '@nestjs/testing';
import { TaskAllocationService } from './task-allocation.service';

describe('TaskAllocationService', () => {
  let service: TaskAllocationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskAllocationService],
    }).compile();

    service = module.get<TaskAllocationService>(TaskAllocationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
