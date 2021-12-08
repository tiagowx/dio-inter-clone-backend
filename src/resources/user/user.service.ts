import { getRepository } from "typeorm";
import md5 from 'crypto-js/md5';

import { User } from "../../entity/User";

import { UserSignIn } from "./ditos/user.signin.ditos";
import { UserSignUp } from "./ditos/user.signup.ditos";
import AppError from "../../shared/error/AppError";
import { response } from "express";

export default class UserService {

  async signin(user: UserSignIn) {
    const userRepository = getRepository(User);

    const { email, password } = user;
    const passwordHash = md5(password).toString();
 
    const existUser = await userRepository.findOne({where: {email,password}})

    if (!existUser) {
      throw new AppError('Usuário não encontrado', 401);
    }

    return existUser;
  }


  async signup(user: UserSignUp) {

  }

}