const client = (req, res) => {
  res.status(404).render('404', { message: 'Sorry | 404 Error Page Not Found' });
};

const server = (error, req, res, next) => {
  res.status(500).render('500', { message: 'Sorry | 500 Server Error' });
};

module.exports = {
  client,
  server
};
