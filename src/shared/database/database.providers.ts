import { Sequelize } from 'sequelize-typescript';
import { database } from '../config/database-config';
import { User } from 'src/modules/user/domain/entities/user.entity';

export const providers = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize(database);
      sequelize.addModels([User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
