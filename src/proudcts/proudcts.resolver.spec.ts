import { Test, TestingModule } from '@nestjs/testing';
import { ProudctsResolver } from './proudcts.resolver';
import { ProudctsService } from './proudcts.service';

describe('ProudctsResolver', () => {
  let resolver: ProudctsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProudctsResolver, ProudctsService],
    }).compile();

    resolver = module.get<ProudctsResolver>(ProudctsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
