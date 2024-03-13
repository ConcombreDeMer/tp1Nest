import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  private readonly validAuthToken = 'monCodeSecret';

  use(req: Request, res: Response, next: NextFunction) {
    const authToken = req.headers['code-secret'];

    // Vérifier si le token d'authentification est valide
    if (authToken === this.validAuthToken) {
      // Si le token est valide, continuer le traitement normal
      next();
    } else {
      // Si le token est invalide, renvoyer une réponse d'erreur 401 Unauthorized
      console.log('Accès refusé');
      res.status(401).json({ message: 'Accès refusé' });
    }
  }
}
