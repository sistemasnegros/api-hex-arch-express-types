import PokemonRepository from '../repositories/pokemonRepository';
import PokemonEntity from '../entities/Pokemon';
import { HTTP_STATUS } from '../const/http';
import { IResponse } from './IResponse';

class PokemonInteractor {
  pokemonRepository: PokemonRepository;

  constructor(pokemonRepository: PokemonRepository) {
    this.pokemonRepository = pokemonRepository;
  }

  async getById(id: number): Promise<IResponse<PokemonEntity | undefined>> {
    const pokemonModel: PokemonEntity = await this.pokemonRepository.getById(
      id,
    );
    if (!pokemonModel) {
      return { status: HTTP_STATUS.NOT_FOUND, error: 'not found' };
    }

    const pokemon: PokemonEntity = {
      id: pokemonModel.id,
      name: pokemonModel.name,
      type: pokemonModel.type,
      image: pokemonModel.image,
    };

    return { status: HTTP_STATUS.OK, data: pokemon };
  }

  async getAll(): Promise<IResponse<PokemonEntity[]>> {
    try {
      const pokemonModel = await this.pokemonRepository.getAll();
      return { status: HTTP_STATUS.OK, data: pokemonModel };
    } catch (e) {
      return { status: HTTP_STATUS.INTERNAL_ERROR, error: e.message };
    }
  }
}
export default PokemonInteractor;
