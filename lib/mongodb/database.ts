// __________________________________________________________________________
let database: string;
// CHECK IF DEVELOPMENT OR PROUDCTION TO SELECT RIGHT COLLECTION
if (process.env.NODE_ENV === 'development') {
  database = process.env.MONGO_DB_DEV_NAME as string;
} else {
  database = process.env.MONGO_DB_NAME as string;
}

export default database;
