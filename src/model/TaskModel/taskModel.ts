import {
  Table,
  Model,
  Column,
  PrimaryKey,
  Default,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";

import User from "../user/userModel";
import Project from "../projectModel/projectModel";

@Table({
  tableName: "Tasks",
  modelName: "Task",
  timestamps: true,
})
class Task extends Model {
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
  declare title: string;

  @Column({
    type: DataType.STRING,
  })
  declare description: string;

  @Column({
    type: DataType.ENUM("Pending", "In Progress", "Completed"),
    defaultValue: "Pending",
  })
  declare status: string;

  // -------- USER RELATION ----------
  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  declare userId: string;

  @BelongsTo(() => User, {
    foreignKey: "userId",
    as: "user",
  })
  declare user?: User;

  // -------- PROJECT RELATION ----------
  @ForeignKey(() => Project)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  declare projectId: string;

  @BelongsTo(() => Project, {
    foreignKey: "projectId",
    as: "project",
  })
  declare project?: Project;
}

export default Task;
