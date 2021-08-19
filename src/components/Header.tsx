import { Link } from "react-router-dom";

// De header
const Header = () => {
    return (
    <nav className="navbar sticky-top navbar-light bg-light">
        <Link className="navbar-brand ml-1" to={`/`}>JEM-id</Link>
        <ul className="nav navbar-nav navbar-center">
            <li><Link to={`/products`}>Look at products</Link></li>
        </ul>
    </nav>
  );
}

export default Header 