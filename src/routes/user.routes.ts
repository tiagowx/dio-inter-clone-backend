import { Router } from "express";

const userRouter = Router();

// POST
userRouter.post('/signin', (request, response) =>{
  console.log('enviado')
  return response.send('Entrando com o usuário')
})
userRouter.post('/signup', (request, response) =>{
  console.log('enviado')
  return response.send('Criando o usuário')
})

// PUT

// DELETE


export default userRouter;