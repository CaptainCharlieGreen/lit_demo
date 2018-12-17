function apiGet (method) {
  const apiRoot = `${window.location.protocol}//${window.location.host}/Client/api`;
  return fetch (`${apiRoot}/${method}`)
    .then(response => response.json());
}

function postData(method, data) {
  const apiRoot = `${window.location.protocol}//${window.location.host}/Client/api`;
  return fetch(`${apiRoot}/${method}`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(data)
  })
  .then(response => response.json());
}

ReactDOM.render(
  <h1 id="header">Welcome to Farnes and Grobel!</h1>,
  document.getElementById('root')
);
