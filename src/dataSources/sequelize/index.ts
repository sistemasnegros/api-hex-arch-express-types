import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  'mysql://unsername:password@localhost:3306/pokemonDb',
);

export default sequelize;
