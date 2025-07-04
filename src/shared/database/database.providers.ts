import { Sequelize } from 'sequelize-typescript';
import { database } from './database-config';
import { User } from '@modules/user/domain/entities/user.entity';
import { Project } from '@modules/project/domain/entities/project.entity';
import { Api } from '@modules/api/domain/entities/api.entity';
import { SEQUELIZE } from '../constants/repository';

export const providers = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      const sequelize = new Sequelize(database);
      sequelize.addModels([User, Project, Api]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
