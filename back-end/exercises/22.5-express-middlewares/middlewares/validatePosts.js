const posts = require('../data');

const validateId = (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(200).json(posts);

  const post = posts.find((p) => p.id === Number(id));
  if (!post) return res.status(404).json({ message: 'post not found' });

  res.status(200).json(post);
};

module.exports = validateId;
