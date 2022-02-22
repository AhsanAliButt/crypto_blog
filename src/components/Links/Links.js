export const Link = (props) => {
    return (
        <li className="nav-item m-2">
            <a className="nav-link active fw-bold" aria-current="page" href="/">{props.linkname}</a>

        </li>

    )
}