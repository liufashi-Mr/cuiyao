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
  tableName: 'apis',
  timestamps: true,
  paranoid: false,
  freezeTableName: false,
})
export class Api extends Model<Api> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING(100))
  name: string;

  @AllowNull(true)
  @Column(DataType.TEXT)
  content?: string;

  @AllowNull(false)
  @Default('DRAFT')
  @Column(DataType.ENUM('DRAFT', 'PUBLISHED', 'DEPRECATED'))
  status: 'DRAFT' | 'PUBLISHED' | 'DEPRECATED';

  @AllowNull(false)
  @Column({ field: 'project_id', type: DataType.INTEGER })
  projectId: number;

  @AllowNull(false)
  @Column({ field: 'created_by', type: DataType.INTEGER })
  createdBy: number;

  @CreatedAt
  @Default(DataType.NOW)
  @Column({ field: 'created_at', type: DataType.DATE })
  createdAt: Date;

  @UpdatedAt
  @Default(DataType.NOW)
  @Column({ field: 'updated_at', type: DataType.DATE })
  updatedAt: Date;
}
