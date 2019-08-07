const home = (req, res) => {
  res.status(200).render('home', { message: 'search for a lot of photos using our app' });
};

module.exports = home;
