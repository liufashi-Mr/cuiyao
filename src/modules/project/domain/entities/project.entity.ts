import {
  Table,
  Model,
  Column,
  DataType,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  Default,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({
  tableName: 'projects',
  timestamps: true,
  paranoid: false,
  freezeTableName: false,
})
export class Project extends Model<Project> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING(100))
  name: string;

  @AllowNull(true)
  @Column(DataType.TEXT)
  description?: string;

  @AllowNull(true)
  @Default('1.0.0')
  @Column(DataType.STRING(20))
  version?: string;

  @AllowNull(false)
  @Default('ACTIVE')
  @Column(DataType.ENUM('ACTIVE', 'INACTIVE', 'ARCHIVED'))
  status: 'ACTIVE' | 'INACTIVE' | 'ARCHIVED';

  @AllowNull(false)
  @Column({ field: 'owner_id', type: DataType.INTEGER })
  ownerId: number;

  @CreatedAt
  @Default(DataType.NOW)
  @Column({ field: 'created_at', type: DataType.DATE })
  createdAt: Date;

  @UpdatedAt
  @Default(DataType.NOW)
  @Column({ field: 'updated_at', type: DataType.DATE })
  updatedAt: Date;
}
