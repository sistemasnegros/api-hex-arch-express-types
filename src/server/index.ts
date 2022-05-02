import express from 'express';
import { Request, Response } from 'express';

import PokemonController from '../controllers/http/PokemonController';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Application works!');
});
app.use('/api/v1/pokemon', PokemonController);

app.listen(3000, () => {
  console.log('Application started on port 3000!');
});
