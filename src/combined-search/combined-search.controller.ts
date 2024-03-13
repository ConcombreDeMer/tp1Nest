import { Controller, Get } from '@nestjs/common';
import { CombinedSearchService } from './combined-search.service';

@Controller('search')
export class CombinedSearchController {
  constructor(private readonly searchService: CombinedSearchService) {}

  @Get()
  async searchAll(): Promise<any> {
    return this.searchService.searchAll();
  }
}
