import pokemonRepository from '../core/repositories/pokemonRepository';
import Pokemon from '../core/entities/Pokemon';
import PokemonModel from './sequelize/PokemonModel';

class PokemonDataSource implements pokemonRepository {
  public async getById(id: number): Promise<Pokemon> {
    const pokemonModel: Pokemon = await PokemonModel.findOne({ where: { id } });
    return pokemonModel;
  }

  public async getAll(): Promise<Pokemon[]> {
    const pokemonModel: Pokemon[] = await PokemonModel.findAll();
    return pokemonModel;
  }
}

export default PokemonDataSource;
