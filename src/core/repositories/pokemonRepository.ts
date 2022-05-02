import Pokemon from '../entities/Pokemon';

interface PokemonRepository {
  getById(id: number): Promise<Pokemon>;
  getAll(): Promise<Pokemon[]>;
}
export default PokemonRepository;
