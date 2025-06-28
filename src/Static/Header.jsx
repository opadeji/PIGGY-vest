import { LuChevronDown } from "react-icons/lu";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import Button from "../Component/Reausable/Button";
const Header = () => {
  return (
    <header className=" h-24 ">
      <div className=" max-w-[1280px] px-16  mx-auto flex h-full items-center justify-between">
        <section className=" flex">
          <main>
            <Link to="/">
              <img src="./logo.svg" alt="" />
            </Link>
          </main>

          <main className=" flex  mx-12 gap-9 items-center font-medium max-tablet:hidden">
            <Link to="/Save">
              <nav className=" flex items-center gap-0.5">
                <span>Save</span>
                <span>
                  <LuChevronDown size={20} />
                </span>
              </nav>
            </Link>

            <Link to="Invest">
              <nav>Invest</nav>
            </Link>

            <Link to="Stories">
              <nav>Stories</nav>
            </Link>
            <Link to="FAQs">
              <nav>FAQs</nav>
            </Link>
            <Link to="Resources">
              <nav className=" flex items-center gap-0.5">
                <span>Resources</span>
                <span>
                  <LuChevronDown />
                </span>
              </nav>
            </Link>
          </main>
        </section>
        <section className=" flex gap-2 max-tablet:hidden">
          <Button title="Sign In" borderColor="#122231" />
          <Button title="Create free Account" bg="#122231" textColor="#fff" />
        </section>
        <section className=" hidden max-tablet:block">
          <RxHamburgerMenu size={35} />
        </section>
      </div>
    </header>
  );
};

export default Header;
