import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { createSubscription, getUserSubscriptions } from "../controllers/subscription.controller.js";
const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => res.send('Get all subscriptions'));

subscriptionRouter.get('/:id', (req, res) => res.send('Get subscriptions details'));

subscriptionRouter.post('/',authorize, createSubscription);

subscriptionRouter.put('/:id', (req, res) => res.send('UPDATE subscriptions'));

subscriptionRouter.delete('/', (req, res) => res.send('DELETE subscriptions'));

subscriptionRouter.get('/user/:id', getUserSubscriptions);

subscriptionRouter.put('/:id/cancel', (req, res) => res.send('Cancel subscription'));

subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send('Get upcoming renewals'));


export default subscriptionRouter;