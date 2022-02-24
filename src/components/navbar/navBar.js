import logo from "../../assets/btc_logo1.jpg";
import "../navbar/navBarStyle.css"
import  NavBarLinks  from "./navBarLinks.js";
export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bn sticky-top border border-primary " style={{ borderRadius: '5px' }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">

                    <img src={logo} alt="" width="70" height="70" className="rounded-circle d-inline-block fw-bold text-white" />
                </a>
                <p className="l1 fw-bold fs-2 m-0 p-0">KryptoKnight</p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <NavBarLinks />
            </div>
        </nav>

    )
}