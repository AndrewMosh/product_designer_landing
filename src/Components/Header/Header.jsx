import logo from "../../assets/Logo.svg";
import { socials } from "../../utils/socials";
import "./header.scss";
import BurgerMenu from "../Burger/Burger";
const Header = ({ isOpen, toggleMenu, setIsOpen }) => {
  return (
    <header className="header">
      <div className="header__logo">
        Марк <img className="header__img" src={logo} alt="logo" /> Игнатьев
      </div>
      <BurgerMenu
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        setIsOpen={setIsOpen}
      />
      <nav className="header__nav">
        <ul className="header__list">
          {socials.map((social) => (
            <li className="header__item" key={social}>
              <a className="header__link" href={social}>
                {social}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
