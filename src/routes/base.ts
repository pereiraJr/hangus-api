import { Router } from 'express';

const CONTEXT_ROOT = '/api';

export const base = (app, controller) => {
  const router = Router();

  app.use(CONTEXT_ROOT, router);

  router.get('/get', (req, res) => {
    res.json(controller.bla());
  });
}