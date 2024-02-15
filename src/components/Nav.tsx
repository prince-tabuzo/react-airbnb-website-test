import NavItems from "./NavItems";
import NavLogo from "./NavLogo";
import "./Nav.css";

function Nav() {
  return (
    <header className="nav-header">
      <nav className="nav">
        <NavLogo />
        <NavItems />
      </nav>
    </header>
  );
}

export default Nav;
