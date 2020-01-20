import { Sequelize, Model, DataTypes } from "sequelize";

const db = new Sequelize({
  database: process.env["POSTGRES_DATABASE"] || "graphqlvsrest",
  username: process.env["POSTGRES_USERNAME"] || "postgres",
  password: process.env["POSTGRES_PASSWORD"] || "postgres",
  host: process.env["POSTGRES_HOST"] || "localhost",
  port: parseInt(process.env["POSTGRES_PORT"], 10) || 5432,
  dialect: "postgres",
  logging: false,
  timezone: "Asia/Jakarta"
});

export class User extends Model {}
User.init(
  {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  },
  { modelName: "user", sequelize: db }
);

export class Content extends Model {}
Content.init(
  {
    user_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    body: DataTypes.TEXT
  },
  { modelName: "content", sequelize: db }
);

export class ContentTag extends Model {}
ContentTag.init(
  {
    content_id: DataTypes.INTEGER,
    tag_name: DataTypes.STRING
  },
  { modelName: "content_tag", sequelize: db }
);

export function syncDB(): Promise<Sequelize> {
  return db.sync();
}
