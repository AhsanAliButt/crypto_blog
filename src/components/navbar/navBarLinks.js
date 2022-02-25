import { Link } from "../Links/Links.js";
import { Dropdown } from "../Links/Links.js";
import { InputForm } from "../forms/Forms.js";

const NavBarLinks=()=>{
    return(
        <div className="collapse navbar-collapse navMenu" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-4 mb-lg-4 px-5 navMenu">
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