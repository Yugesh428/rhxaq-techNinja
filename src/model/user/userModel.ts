import {
  Table,
  Model,
  Column,
  PrimaryKey,
  Default,
  DataType,
  HasMany,
} from "sequelize-typescript";
import Task from "../TaskModel/taskModel";

@Table({
  tableName: "Users",
  modelName: "User",
  timestamps: true,
})
class User extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  declare id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  declare email: string;

  @HasMany(() => Task)
  declare tasks?: Task[];
}

export default User;
