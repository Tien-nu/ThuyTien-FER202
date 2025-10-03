import '../css/header.css';  
import { FaSearch } from "react-icons/fa";

export default function Header(){
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="header container-fluid ">
                <a class="navbar-brand" href="#">Pizza House</a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">About us</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <div className="input-group search-box">
                    <input
                    type="search"
                    className="form-control"
                    placeholder="Search"
                    aria-label="Search"
                    />
                    <button className="btn btn-search" type="submit">
                    <FaSearch />
                    </button>
                </div>
                </form>
                </div>
            </div>
        </nav>
    )
}