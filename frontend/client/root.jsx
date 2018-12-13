function apiGet (method) {
  const apiRoot = `${window.location.protocol}//${window.location.host}/api`;
  return fetch (`${apiRoot}/${method}`)
    .then(response => response.json());
}

ReactDOM.render(
  <h1>Welcome to the Congo Bookstore!</h1>,
  document.getElementById('root')
);
