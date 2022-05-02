import PokemonInteractor from '../../core/interactors';
import express from 'express';
import { Response, Request } from 'express';

const router = express.Router();

router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status, data, error } = await PokemonInteractor.getById(parseInt(id));
  res.status(status).json({ data, error });
});

router.get('/', async (req: Request, res: Response) => {
  const { status, data, error } = await PokemonInteractor.getAll();
  res.status(status).json({ data, error });
});

export default router;
