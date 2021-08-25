// React
import React, { useEffect } from "react";

// Next
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

// Store Context
import { useDataContext } from "../store/store";

// Components
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { toast } from "react-toastify";

// Configs
import { getPlanetImagePath } from "../configs/constants";

export default function Planets() {
  const { planets } = useDataContext();
  const router = useRouter();

  useEffect(() => {
    if (planets.length === 0) {
      toast.error("No Planets found, redirecting to the home page!");
      return router.push("/");
    }
  });

  return (
    <div>
      <Head>
        <title>Find Falcone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="app">
        <Header />
        <div className="app__planets">
          {planets.length ? (
            planets.map((planet) => {
              return (
                <div key={planet.name} className="app__planets__card">
                  <Image
                    alt="Planets Image"
                    src={getPlanetImagePath[planet.name]}
                    width={280}
                    height={280}
                  />
                  <p className="app__planets__card__name">{planet.name}</p>
                  <p className="app__planets__card__distance">
                    {planet.distance}
                  </p>
                </div>
              );
            })
          ) : (
            <div className="app__planets__card">
              <p>No Planets Found</p>
            </div>
          )}
        </div>
        <Footer />
      </main>
    </div>
  );
}
