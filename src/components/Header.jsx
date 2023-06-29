import { AiFillBug } from "react-icons/ai";
import { MdContactPage, MdHome, MdInfo } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";

export default function Header() {
  return (
    <header>
      <Link to="/" className="logo">
      <AiFillBug size={24} />
        <div>IntegerStore</div>
      </Link>
      <nav>
        <NavLink to="/">
          <MdHome size={24} />
          Beranda
        </NavLink>
        <NavLink to="/about">
          <MdInfo size={24} />
          Tentang
        </NavLink>
      </nav>
      <Button>Login</Button>
    </header>
  );
}
