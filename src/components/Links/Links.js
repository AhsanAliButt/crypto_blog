export const Link = (props) => {
    return (
        <li className="nav-item m-0 p-0 ms-3 mt-2 px-1 mx-1">
            <a className="nav-link active fw-bold m-0 p-0 fs-4 st px-2 mx-2" aria-current="page" href="/">{props.linkname}</a>

        </li>

    )
}
export const Dropdown = (props) => {
    return (
            <li className="nav-item dropdown m-0 p-0">
            <a className="nav-link active dropdown-toggle fw-bold fs-4" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Strategies
            </a>
            <ul className="dropdown-menu dm" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="/">Pump and Dump</a></li>
                <li><a className="dropdown-item" href="/">Averaging</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/">Bear Market</a></li>
            </ul>
        </li>
        // <div class="btn-group m-0 p-0 ms-3 mt-2">
        //     <button class="btn dropdown-toggle fw-bold fs-4 " type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
        //         Dropdown
        //     </button>
        //     <ul class="dropdown-menu mt-4" aria-labelledby="dropdownMenuButton">
        //         <li><a class="dropdown-item" href="/">Menu item</a></li>
        //         <li><a class="dropdown-item" href="/">Menu item</a></li>
        //         <li><a class="dropdown-item" href="/">Menu item</a></li>
        //     </ul>
        // </div>
        

    )
}