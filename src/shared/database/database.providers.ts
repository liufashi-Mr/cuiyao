import { Sequelize } from 'sequelize-typescript';
import { database } from './database-config';
import { User } from 'src/modules/user/domain/entities/user.entity';
import { SEQUELIZE } from '../constants/repository';

export const providers = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      const sequelize = new Sequelize(database);
      sequelize.addModels([User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
