



const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="https://t2.gstatic.com/images?q=tbn:ANd9GcRAIvnqHJeI2w4Ay6Xx_bGKmucCY0HEQGqWD-LY8rF3NC1irkvW" alt="Company Logo" width="30" height="30" className="d-inline-block align-text-top" />
          ealme
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#smartphones">Smartphones</a></li>
            <li className="nav-item"><a className="nav-link" href="#accessories">Accessories</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            {/* <li className="nav-item"><a className="nav-link" href="#support">Support</a></li> */}
            {/* <li className="nav-item"><a className="nav-link" href="#community">Community</a></li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
  
  export default Navbar;