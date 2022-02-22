import logo from "../../assets/btc_logo1.jpg";
import "../navbar/navBarStyle.css"
import { Button } from "../Buttons/Button.js";
import { Link } from "../Links/Links.js";
export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bn sticky-top border border-primary" style={{borderRadius:'5px'}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">

                    <img src={logo} alt="" width="70" height="70" className="rounded-circle d-inline-block fw-bold text-white" />
                </a>
                <p className="l1 fw-bold fs-2 m-0 p-0">KryptoKnight</p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navMenu" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 navMenu">
                        <Link linkname="Home" />
                        <Link linkname="Link" />
                        <li className="nav-item dropdown m-2">
                            <a className="nav-link dropdown-toggle text-white" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/">Action</a></li>
                                <li><a className="dropdown-item" href="/">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="/">Something else here</a></li>
                            </ul>
                        </li>
                        <Link linkname="Contact Us" />
                    </ul>
                    <form className="d-flex">
                        <input className="form-control m-1 " type="search" placeholder="Search" aria-label="Search" />
                        <Button buttonname="Search" color="gray" textColor="white" />
                    </form>
                </div>
            </div>
        </nav>

    )
}