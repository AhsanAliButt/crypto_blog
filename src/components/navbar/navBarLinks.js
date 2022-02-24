import { Link } from "../Links/Links.js";
import { Dropdown } from "../Links/Links.js";
import { InputForm } from "../forms/Forms.js";

const NavBarLinks=()=>{
    return(
        <div className="collapse navbar-collapse navMenu" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 navMenu">
                        <Link linkname="Home" />
                        <Link linkname="Link" />
                        <Dropdown />
                        <Link linkname="Contact Us" />
                        </ul>
                        <InputForm />
                </div>    
    )
}
export default NavBarLinks;