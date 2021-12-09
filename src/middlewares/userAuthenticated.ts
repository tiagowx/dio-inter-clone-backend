import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import  authConfig from "../config/auth";

import AppError from "../shared/error/AppError";

interface iTokenPlayLoad {
  firstName: string;
  lastName:string;
  iat: number;
  exp: number;
  sub: string;
}

export default function userAuthenticated (
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  // Validação do token JWT

  const authHeader = req.headers.authorization;

  if (!authHeader){
    throw new AppError('Não foi enviado o JWT',401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    const {sub, firstName, lastName} = decoded as iTokenPlayLoad;

    req.user = {
      id: sub,
      firstName,
      lastName
    };

    return next();
  }catch {
    throw new AppError('Token JWT inválido', 401)
  }
}