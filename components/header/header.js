// Next
import Image from "next/image";
import router from "next/router";

// Components
import Button from "../button/button";

const Header = () => {
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
            <Button
              classname="app__header__contents__right__cta app__header__contents__right__cta--first"
              handleClick={() => router.push("/planets")}
            >
              Planets
            </Button>
            <Button
              classname="app__header__contents__right__cta app__header__contents__right__cta--second"
              handleClick={() => router.push("/vehicles")}
            >
              Vehicles
            </Button>
          </div>
        </div>
      </header>
    </article>
  );
};

export default Header;
