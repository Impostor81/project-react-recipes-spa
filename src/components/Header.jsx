import { Link } from "react-router-dom";

export default function Header() {
  return <nav className="light-green darken-3">
  <div className="nav-wrapper">
    <Link to="/" className="logo">React Recipes SPA</Link>
    <ul id="nav-mobile" className="right">
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contacts">Contacts</Link>
      </li>
    </ul>
  </div>
</nav>;
}
