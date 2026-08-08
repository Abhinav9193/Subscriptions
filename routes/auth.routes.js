import { Router } from "express";

const authRouter = Router();

authRouter.get('/signup', (req, res) => 
    res.send({
        message: 'Sign Up'
    }));

    authRouter.get('/signin', (req, res) => 
    res.send({
        message: 'Sign in'
    }));

    authRouter.get('/logout', (req, res) => 
    res.send({
        message: 'Log Out'
    }));

export default authRouter;

