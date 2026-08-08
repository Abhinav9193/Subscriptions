import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/allsubscriptions', (req, res) => {
    res.send({
        message: "Here are your subscriptions"
    })
})

export default subscriptionRouter;  