import { Test, TestingModule } from '@nestjs/testing';
import { DvdController } from './dvd.controller';

describe('DvdController', () => {
  let controller: DvdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DvdController],
    }).compile();

    controller = module.get<DvdController>(DvdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
