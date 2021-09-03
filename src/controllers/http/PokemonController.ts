import PokemonInteractor from '../../core/interactors';
import express from 'express';
import { Response, Request } from 'express';

const router = express.Router();

router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const pokemonModel = await PokemonInteractor.getById(parseInt(id));
    res.json(pokemonModel);
  } catch (e) {
    console.log(e);
    res.status(404).json({ errors: e.message });
  }
});

router.get('/', async (req: Request, res: Response) => {
  try {
    const pokemonModel = await PokemonInteractor.getAll();
    res.json(pokemonModel);
  } catch (e) {
    console.log(e);
    res.status(404).json({ errors: e.message });
  }
});

export default router;
