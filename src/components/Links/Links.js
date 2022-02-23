export const Link = (props) => {
    return (
        <li className="nav-item m-0 p-0 ms-3 mt-2">
            <a className="nav-link active fw-bold fs-4" aria-current="page" href="/">{props.linkname}</a>

        </li>

    )
}
export const Dropdown = (props) => {
    return (
        <li className="nav-item dropdown m-0 p-0 ms-3 mt-2">
        <a className="nav-link active dropdown-toggle fw-bold fs-4" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Strategies
        </a>
        <ul className="dropdown-menu mt-4" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Bitcon Pump and Dump</a></li>
            <li><a className="dropdown-item" href="/">Averaging</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/">How to be safe in Bear Market</a></li>
        </ul>
    </li>

    )
}