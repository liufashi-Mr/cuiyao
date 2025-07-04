import {
  Table,
  Model,
  Column,
  DataType,
  PrimaryKey,
  AutoIncrement,
  Unique,
  AllowNull,
  Default,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({
  tableName: 'users',
  timestamps: true,
  paranoid: true,
  freezeTableName: false,
})
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Unique
  @AllowNull(false)
  @Column(DataType.STRING(50))
  username: string;

  @Unique
  @AllowNull(false)
  @Column(DataType.STRING(100))
  email: string;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  password: string;

  @AllowNull(true)
  @Column({ field: 'first_name', type: DataType.STRING(50) })
  firstName?: string;

  @AllowNull(true)
  @Column({ field: 'last_name', type: DataType.STRING(50) })
  lastName?: string;

  @Unique
  @AllowNull(true)
  @Column(DataType.STRING(20))
  phone?: string;

  @AllowNull(true)
  @Column(DataType.STRING(255))
  avatar?: string;

  @AllowNull(true)
  @Column({ field: 'date_of_birth', type: DataType.DATEONLY })
  dateOfBirth?: string;

  @AllowNull(true)
  @Column(DataType.ENUM('MALE', 'FEMALE', 'OTHER'))
  gender?: 'MALE' | 'FEMALE' | 'OTHER';

  @Default(true)
  @Column({ field: 'is_active', type: DataType.BOOLEAN })
  isActive: boolean;

  @CreatedAt
  @Default(DataType.NOW)
  @Column({ field: 'created_at', type: DataType.DATE })
  createdAt: Date;

  @UpdatedAt
  @Default(DataType.NOW)
  @Column({ field: 'updated_at', type: DataType.DATE })
  updatedAt: Date;
}
