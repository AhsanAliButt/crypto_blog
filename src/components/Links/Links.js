export const Link = (props) => {
    return (
        <li className="nav-item m-0 p-0 ms-3 mt-3">
            <a className="nav-link active fw-bold fs-4" aria-current="page" href="/">{props.linkname}</a>

        </li>

    )
}