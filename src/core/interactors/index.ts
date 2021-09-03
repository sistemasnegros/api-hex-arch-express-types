import PokemonInteractor from './pokemonInteractor';
import PokemonDataSource from '../../dataSources/PokemonDataSource';

const pokemonDataSource = new PokemonDataSource();
const pokemonInteractor = new PokemonInteractor(pokemonDataSource);

export default pokemonInteractor;
