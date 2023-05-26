import Image from "next/image"
import "./styles.scss"

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <Image src="/logo.svg" alt="logo-infojobs" width="40" height="40" />
                <ul className="navbar-items">
                    <li className="navbar-items__link">
                        <a>
                            Empleo
                        </a>
                    </li>
                    <li className="navbar-items__link">
                        <a>
                            Mis ofertas
                        </a>
                    </li>
                    <li className="navbar-items__link">
                        <a>
                            CV
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}