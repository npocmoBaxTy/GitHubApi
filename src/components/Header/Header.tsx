import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header className="header fixed z-50 bg-white left-0 top-0 w-full p-2 border-b border-gray-300 shadow-lg">
      <div className="header__inner flex items-center">
        <Logo />
        <nav className="header__nav ml-auto">
          <ul className="header__nav--list flex items-center gap-4">
            <li className="header__list--item">
              <a
                href="https://github.com/npocmoBaxTy"
                className="header__link underline"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
