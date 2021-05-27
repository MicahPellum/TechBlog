const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'I agree!',
    user_id: 13,
    post_id: 1
  },
  {
    comment_text: 'This post sucks.',
    user_id: 8,
    post_id: 8
  },
  {
    comment_text: 'Coding is fun!!!',
    user_id: 2,
    post_id: 10
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;