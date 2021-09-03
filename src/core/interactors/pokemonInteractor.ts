import PokemonRepository from '../repositories/pokemonRepository';
import PokemonEntity from '../entities/Pokemon';

class PokemonInteractor implements PokemonRepository {
  pokemonRepository: PokemonRepository;

  constructor(pokemonRepository: PokemonRepository) {
    this.pokemonRepository = pokemonRepository;
  }

  async getById(id: number): Promise<PokemonEntity> {
    const pokemonModel: PokemonEntity = await this.pokemonRepository.getById(
      id,
    );
    if (!pokemonModel) {
      throw new Error('id pokemon not found.');
    }
    const pokemon: PokemonEntity = {
      id: pokemonModel.id,
      name: pokemonModel.name,
      type: pokemonModel.type,
      image: pokemonModel.image,
    };
    return pokemon;
  }

  async getAll(): Promise<PokemonEntity[]> {
    const pokemonModel: PokemonEntity[] = await this.pokemonRepository.getAll();
    if (!pokemonModel) {
      throw new Error('Internal error.');
    }
    return pokemonModel;
  }
}
export default PokemonInteractor;
