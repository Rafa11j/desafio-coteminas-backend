const path = process.env.NODE_ENV === 'development' ? 'src' : 'dist'
const extension = process.env.NODE_ENV === 'development' ? 'ts' : 'js'

const productionConfig = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "ssl": {"require": true },
  "extra": {
    "ssl": {
      "rejectUnauthorized": false,
    },
  },
  "entities": [
    `./${path}/modules/**/entities/*.${extension}`
  ],
  "migrations": [
    `./${path}/app/database/migrations/*.${extension}`
  ],
  "cli": {
    "migrationsDir": `./${path}/app/database/migrations`
  }
};

const developmentConfig = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "entities": [
    `./${path}/modules/**/entities/*.${extension}`
  ],
  "migrations": [
    `./${path}/app/database/migrations/*.${extension}`
  ],
  "cli": {
    "migrationsDir": `./${path}/app/database/migrations`
  }
};

const config = process.env.NODE_ENV === 'development' ? developmentConfig : productionConfig;

module.exports = config;
