export default function Header() {
  return (
    <header style={{ backgroundColor: "#e69b4fff" }} className="p-2">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <div className="d-flex align-items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/68/Logo_FPT_Education.png"
            alt="FPT Logo"
            style={{ width: "120px", height: "auto" }}
          />
          <span className="fw-bold ms-2 text-white">FPT UNIVERSITY</span>
        </div>

        {/* Navbar */}
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link text-white fw-bold" href="#">
                Trang chủ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-bold" href="#">
                Đào tạo
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-bold" href="#">
                Tuyển sinh
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-bold" href="#">
                Sinh viên
              </a>
            </li>
          </ul>
        </nav>

        {/* Search box */}
        <form className="d-flex">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </div>
    </header>
  );
}
