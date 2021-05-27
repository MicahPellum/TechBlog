const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'Micah',
    email: 'micah@email.com',
    password: 'password123'
  },
  {
    username: 'Caspian',
    email: 'caspian@email.com',
    password: 'password123'
  },
  {
    username: 'Harley',
    email: 'harley@email.com',
    password: 'password123'
  },
  {
    username: 'Trevor',
    email: 'trevor@email.com',
    password: 'password123'
  },
  {
    username: 'Janie',
    email: 'janie@email.com',
    password: 'password123'
  },
  {
    username: 'Paul',
    email: 'paul@email.com',
    password: 'password123'
  },
  {
    username: 'Tom',
    email: 'tom@email.com',
    password: 'password123'
  },
  {
    username: 'Bill',
    email: 'bill@email.com',
    password: 'password123'
  },
  {
    username: 'Joe',
    email: 'joe@email.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;