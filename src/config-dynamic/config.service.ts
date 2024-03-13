import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class ConfigService {
  constructor(@Inject('API_KEY') private apiKey: string) {}

  getApiKey(): string {
    return this.apiKey;
  }
}
