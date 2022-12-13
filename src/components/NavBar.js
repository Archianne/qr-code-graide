/* eslint-disable react/react-in-jsx-scope */
import graideLogo from "../assets/graide.svg";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <nav>
      <a className="logo-link" href="/">
        <img src={graideLogo} />
      </a>
    </nav>
  );
};
