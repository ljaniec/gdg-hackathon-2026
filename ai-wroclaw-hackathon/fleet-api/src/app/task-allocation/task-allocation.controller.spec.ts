import { Test, TestingModule } from '@nestjs/testing';
import { TaskAllocationController } from './task-allocation.controller';

describe('TaskAllocationController', () => {
  let controller: TaskAllocationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskAllocationController],
    }).compile();

    controller = module.get<TaskAllocationController>(TaskAllocationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
