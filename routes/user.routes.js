import { Router } from 'express';

const userRouter = Router();

userRouter.get('/user', (req,res) => {
    res.send({
        title: 'Fetch all Users'
    });
})

userRouter.get('/:id', (req,res) => {
    res.send({
        title: 'Fetch User Details'
    });
})

userRouter.post('/user', (req,res) => {
    res.send({
        title: 'Create New User'
    });
})

userRouter.put('/:id', (req,res) => {
    res.send({
        title: 'Update User'
    });
})


export default userRouter;
