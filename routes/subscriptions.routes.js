import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/subscriptions', (req, res) => {
    res.send({
        message: "Here are your subscriptions"
    })
})