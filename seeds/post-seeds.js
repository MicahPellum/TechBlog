const { Post } = require('../models');

const postdata = [
  {
    title: 'I really love Javascript!',
    post_url: 'https://afternoon.example.com/',
    user_id: 7
  },
  {
    title: 'CSS is so fun!!!!',
    post_url: 'https://ants.example.com/#bridge',
    user_id: 3
  },
  {
    title: 'I hate HTML.....',
    post_url: 'https://achiever.example.edu/airport?airplane=bear',
    user_id: 1
  },
  {
    title: 'The weather is great today! What a perfect day to code',
    post_url: 'https://aunt.example.org/',
    user_id: 9
  },
  {
    title: 'I am the best coder in the world!!!',
    post_url: 'http://bear.example.com/airport.php',
    user_id: 4
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;