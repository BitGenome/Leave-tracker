import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import { sequelize } from '../services/database/database.service';

// eslint-disable-next-line strict, lines-around-directive

export interface LeaveCategoryAttributes
  extends Model<
    InferAttributes<LeaveCategoryAttributes>,
    InferCreationAttributes<LeaveCategoryAttributes>
  > {
  id: CreationOptional<string>;
  name: string;
  accrual_rate?: number;
}

const LeaveCategory = sequelize.define<LeaveCategoryAttributes>(
  'LeaveCategory',
  {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    accrual_rate: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
);

export default LeaveCategory;
