// React
import React, { useEffect } from "react";
import { useRouter } from "next/router";

// Next
import Head from "next/head";
import Image from "next/image";

// Store Context
import { useDataContext } from "../store/store";

// Components
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Button from "../components/button/button";
import { toast } from "react-toastify";

// Constants
import { getPlanetImagePath } from "../configs/constants";

export default function Result() {
  const router = useRouter();
  const { planet_name, time } = useDataContext();

  // updates the state from the session storage
  useEffect(() => {
    if (planet_name.length === 0) {
      toast.error("No results found, redirecting to the home page!");
      return router.push("/");
    }
  });

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
                pleased!
              </span>
            </h4>
            <p>Total time to reach all the planets : {time}</p>
            <p>
              <span>Planet Found: {planet_name}</span>
            </p>
            <div className="app__result__header__contents__icon">
              {planet_name ? (
                <Image
                  alt="Planet Icon"
                  src={getPlanetImagePath[`${planet_name}`]}
                  width={280}
                  height={280}
                />
              ) : (
                ""
              )}
            </div>
            <Button handleClick={() => router.push("/")}>Start Again</Button>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
