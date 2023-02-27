const configs = {
  BCRYPT_SALT_RATE: 10,
  JWT_EXPIRE_PERIOD: '2d',
  GRADING_DB_CONFIG: {
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    port: process.env.POSTGRES_PORT
  }
}

module.exports = configs;
