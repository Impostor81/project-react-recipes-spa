import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="page-footer light-green darken-3">
      <div className="footer-copyright light-green darken-3">
        <div className="container light-green darken-3">
        © {new Date().getFullYear()} Copyright
        <Link className="footer-about grey-text text-lighten-4 right" to="/about">About</Link>
        <Link className="grey-text text-lighten-4 right" to="/contacts">Contacts</Link>
        </div>
      </div>
    </footer>
  )
}