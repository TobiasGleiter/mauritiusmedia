let database: string;
// CHECK IF DEVELOPMENT OR PROUDCTION TO SELECT RIGHT database
process.env.NODE_ENV === 'development'
  ? (database = process.env.MONGO_DB_DEV_NAME as string)
  : (database = process.env.MONGO_DB_NAME as string);

export default database;
