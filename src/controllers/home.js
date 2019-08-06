const home = (req, res) => {
  res.render('home', { message: 'search for a lot of photos using our app' });
};

module.exports = home;
