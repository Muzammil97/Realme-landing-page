const Smartphones = ({ products }) => (
    <div id="smartphones" className="container mt-5">
      <h2 className="mb-4">Smartphones</h2>
      <div className="row">
        {products.mobiles.map((mobile) => (
          <div className="col-md-6 mb-4" key={mobile.name}>
            <div className="card shadow-sm h-100">
              <div className="row g-0">
                <div className="col-4">
                  <img src={mobile.image} className="img-fluid rounded-start" alt={mobile.name} />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h5 className="card-title">{mobile.name}</h5>
                    <p className="card-text text-muted">{mobile.description}</p>
                    <h6 className="text-success">{mobile.price}</h6>
                    <a href={mobile.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm mt-2">More Detail</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
  export default Smartphones;