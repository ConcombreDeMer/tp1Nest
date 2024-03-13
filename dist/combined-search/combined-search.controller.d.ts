import { CombinedSearchService } from './combined-search.service';
export declare class CombinedSearchController {
    private readonly searchService;
    constructor(searchService: CombinedSearchService);
    searchAll(): Promise<any>;
}
