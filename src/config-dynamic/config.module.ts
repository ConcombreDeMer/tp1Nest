import { DynamicModule, Module } from '@nestjs/common';
import { ConfigService } from './config.service';

@Module({})
export class ConfigModule {
  static register(apiKey: string): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        {
          provide: 'API_KEY', // Nom du service
          useValue: apiKey, // Valeur fournie lors de l'enregistrement du module
        },
        ConfigService,
      ],
      exports: ['API_KEY', ConfigService], // Exportez le service ainsi que la clé d'API
    };
  }
}
