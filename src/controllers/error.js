const client = (req, res) => {
  res.render('404', { message: 'Sorry | 404 Error Page Not Found' });
};

const server = (error, req, res, next) => {
  res.render('500', { message: 'Sorry | 500 Server Error' });
};

module.exports = {
  client,
  server
};
