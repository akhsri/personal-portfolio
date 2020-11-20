import ActiveLink from './ActiveLink'

export default function Nav() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-black">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item mx-2 px-2">
                        <ActiveLink activeClassName="active" href="/">
                            <a className="nav-link">Home</a>
                        </ActiveLink>
                    </li>
                    <li className="nav-item mx-2 px-2">
                        <ActiveLink activeClassName="active" href="/about">
                            <a className="nav-link">About</a>
                        </ActiveLink>
                    </li>
                    <li className="nav-item mx-2 px-2">
                        <ActiveLink activeClassName="active" href="/contact">
                            <a className="nav-link">Contact</a>
                        </ActiveLink>
                    </li>


                </ul>
            </div>
        </nav>
    )
}