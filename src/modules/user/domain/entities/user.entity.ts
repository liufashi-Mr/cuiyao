import {
  Column,
  DataType,
  PrimaryKey,
  Table,
  Model,
} from 'sequelize-typescript';

@Table({
  paranoid: true,
  freezeTableName: false,
  timestamps: true,
  tableName: 'users',
})
export class User extends Model<User> {
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.STRING(255))
  name: string;

  @Column(DataType.STRING(255))
  avatar: string;

  @Column(DataType.DATE)
  createdAt: Date;

  @Column(DataType.DATE)
  updatedAt: Date;
}
