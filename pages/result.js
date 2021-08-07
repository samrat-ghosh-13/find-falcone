// React
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

// Next
import Head from "next/head";
import Image from "next/image";

// Components
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

// Constants
import { getPlanetImagePath } from "../configs/constants";

export default function Result() {
  const router = useRouter();
  const [planet, setPlanet] = useState("");
  const [time, setTime] = useState(0);

  // updates the state from the session storage
  useEffect(() => {
    setPlanet(sessionStorage.getItem("planet_name"));
    setTime(sessionStorage.getItem("time"));
  }, []);

  // returns the final JSX for result.js
  return (
    <div>
      <Head>
        <title>Find Falcone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="app">
        <Header />
        <div className="app__result">
          <div className="app__result__header__contents">
            <h4>
              <span>
                Success! Congratulations on finding falcone, King Shah is mighty
                pleased!{" "}
              </span>
            </h4>
            <p>Total time to reach all the planets : {time}</p>
            <p>
              <span>Planet Found: {planet}</span>
            </p>
            <div>
              {planet ? (
                <Image
                  alt="Planet Icon"
                  src={getPlanetImagePath[`${planet}`]}
                  width={280}
                  height={280}
                />
              ) : (
                ""
              )}
            </div>
            <button
              onClick={() => {
                router.push("/");
              }}
            >
              Start Again
            </button>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
