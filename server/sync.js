const sequelize = require('./config/db');
const User = require('./models/Usuario');

sequelize.sync({ force: true })
  .then(() => {
    console.log('Database synchronized');
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });
