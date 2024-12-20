const Accessories = ({ products }) => (
    <div id="accessories" className="container mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <h2>Accessories</h2>
      </div>
      <div className="row">
        {Object.entries(products.accessories).map(([category, items]) => (
          items.map((item) => (
            <div className="col-md-6 mb-4" key={item.name}>
              <div className="card shadow-sm h-100">
                <div className="row g-0">
                  <div className="col-4">
                    <img src={item.image} className="img-fluid rounded-start" alt={item.name} />
                  </div>
                  <div className="col-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text text-muted">{item.description}</p>
                      <h6 className="text-success">{item.price}</h6>
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm mt-2">More Detail</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ))}
      </div>
    </div>
  );
  

  export default Accessories;