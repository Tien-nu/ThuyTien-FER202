export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg justify-content-center" style={{ backgroundColor: "#d88a3c" }}>
        <ul className="navbar-nav" >
          <li className="nav-item" >
            <a className="nav-link text-white fw-semibold" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white fw-semibold" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white fw-semibold" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    )
}