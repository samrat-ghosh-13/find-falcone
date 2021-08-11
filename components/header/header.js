// Next
import Image from "next/image";
import router from "next/router";

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
            <button
              className="app__header__contents__right__cta app__header__contents__right__cta--first"
              onClick={() => router.push("/planets")}
            >
              Planets
            </button>
            <button
              className="app__header__contents__right__cta app__header__contents__right__cta--second"
              onClick={() => router.push("/vehicles")}
            >
              Vehicles
            </button>
          </div>
        </div>
      </header>
    </article>
  );
};

export default Header;
