const app = require('./app');

app.listen(app.get('port'), app.get('hostname'), () => {
  // eslint-disable-next-line no-console
  console.log(
    `The server is running on http://${app.get('hostname')}:${app.get('port')}`
  );
});
