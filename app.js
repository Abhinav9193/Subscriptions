import express from "express";
import { PORT } from "./config/env.js";
import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import subscriptionRouter from './routes/subscriptions.routes.js';
import connectToDatabase from "./database/mongodb.js";

const app = express();

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/subscriptions', subscriptionRouter);

app.get('/', (req, res) => {
res.send('Hello World!')
});

app.listen(PORT, async () => {
console.log(`Server is running on http://localhost:${PORT}`);

await connectToDatabase();
});

export default app;