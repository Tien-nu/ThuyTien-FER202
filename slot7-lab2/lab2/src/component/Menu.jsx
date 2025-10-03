import '../css/menu.css';

export default function Menu() {
  return (
    <div className="menu-section bg-dark text-white py-5">
      <div className="container">
        <h2 className="mb-4">Our Menu</h2>
        <div className="row g-4">

          {/* Card 1 */}
          <div className="col-md-3">
            <div className="card h-100">
                <div className="position-relative">
                    <span className="badge bg-warning text-dark position-absolute rounded-0 h-40">SALE</span>
                    <img src="https://i.pinimg.com/1200x/4d/a7/3f/4da73f313deef52c2373795a970b4082.jpg" className="card-img-top" alt="Margherita Pizza"/>
                </div>
                <div className="card-body text-center">
                    <h5 className="card-title">Margherita Pizza</h5>
                    <p>
                    <span className="text-muted text-decoration-line-through">$40.00</span>
                    <span className="text-warning fw-bold ms-2">$24.00</span>
                    </p>
                    <button className="btn btn-dark w-100">Buy</button>
                </div>
            </div>
        </div>

          {/* Card 2 */}
        <div className="col-md-3">
            <div className="card h-100">
                <div className="position-relative">
                    <img src="https://i.pinimg.com/1200x/43/9b/b3/439bb3c30302c369784a5df05cd85d70.jpg" className="card-img-top" alt="Mushroom Pizza"/>
                </div>
                <div className="card-body text-center">
                    <h5 className="card-title">Mushroom Pizza</h5>
                    <p>$25.00</p>
                    <button className="btn btn-dark w-100">Buy</button>
                </div>
            </div>
        </div>

          {/* Card 3 */}
        <div className="col-md-3">
            <div className="card h-100">
                <div className="position-relative">
                    <span className="badge bg-warning text-dark position-absolute rounded-0">NEW</span>
                    <img src="https://i.pinimg.com/736x/ed/71/24/ed7124aa0c4616269bd88bb6410a5dde.jpg" className="card-img-top" alt="Hawaiian Pizza"/>
                </div>
                <div className="card-body text-center">
                    <h5 className="card-title">Hawaiian Pizza</h5>
                    <p>$30.00</p>
                    <button className="btn btn-dark w-100">Buy</button>
                </div>
            </div>
        </div>

          {/* Card 4 */}
        <div className="col-md-3">
            <div className="card h-100">
                <div className="position-relative">
                    <span className="badge bg-warning text-dark position-absolute rounded-0">SALE</span>
                    <img src="https://i.pinimg.com/736x/83/d5/5b/83d55b5cc0a71b2acd525d53fa14303a.jpg" className="card-img-top"/>
                </div>
                <div className="card-body text-center">
                    <h5 className="card-title">Pesto Pizza</h5>
                    <p>
                    <span className="text-muted text-decoration-line-through">$40.00</span>
                    <span className="text-warning fw-bold ms-2">$30.00</span>
                    </p>
                    <button className="btn btn-dark w-100">Buy</button>
                </div>
            </div>
        </div>

        </div>
      </div>
    </div>
  );
}
