function getSales () {
  apiGet('sales')
    .then(sales => ReactDOM.render(renderSales(sales),
      document.getElementById('sales')));
}

getSales();

function renderSales (sales) {
  return (
    <div>
      <h3>Authors on sale</h3>
      <div>
        {
          sales.map((author, id) =>
            <div key={id}>
              {author}
            </div>
          )
        }
      </div>  
    </div>
    );
}
