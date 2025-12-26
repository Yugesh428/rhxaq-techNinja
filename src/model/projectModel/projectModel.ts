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
  tableName: "Projects",
  modelName: "Project",
  timestamps: true,
})
class Project extends Model {
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
  declare projectName: string;

  @Column({
    type: DataType.STRING,
  })
  declare description: string;

  @HasMany(() => Task)
  declare tasks?: Task[];
}

export default Project;
