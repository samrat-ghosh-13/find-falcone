// Next
import Image from "next/image";
import { useRouter } from "next/router";

// Components
import Button from "../button/button";

// prop-types
import { arrayOf, object } from "prop-types";

const Header = ({ buttons }) => {
  const router = useRouter();
  const getButtons = () => {
    return buttons.map((button) => {
      return (
        <Button
          key={button.name}
          classname={`app__header__contents__right__cta app__header__contents__right__cta--${button.name}`}
          handleClick={() => router.push(button.path)}
        >
          {button.name}
        </Button>
      );
    });
  };
  return (
    <article>
      <header className="app__header">
        <div className="app__header__contents">
          <div
            className="app__header__contents__left"
            onClick={() => router.push("/")}
          >
            <Image
              alt="Falcons Icon"
              src="/assets/falcons.png"
              width={32}
              height={32}
              layout="fixed"
            />
            <p className="app__header__contents__left__text">Finding Falcone</p>
          </div>
          <div className="app__header__contents__right">
            {buttons.length ? getButtons() : ""}
          </div>
        </div>
      </header>
    </article>
  );
};

Button.propTypes = {
  buttons: arrayOf(object),
};

Button.defaultProps = {
  buttons: [],
};

export default Header;
