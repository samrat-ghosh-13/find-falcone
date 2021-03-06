// React
import { useEffect } from "react";

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
import { getVehiclesImagePath } from "../configs/constants";

export default function Planets() {
  const headerButtons = [
    {
      name: "Planets",
      path: "/planets",
    },
    {
      name: "Vehicles",
      path: "/vehicles",
    },
  ];
  const { vehicles } = useDataContext();
  const router = useRouter();

  useEffect(() => {
    if (vehicles.length === 0) {
      toast.error("No Vehicles found, redirecting to the home page!");
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
        <Header buttons={headerButtons} />
        <div className="app__vehicles">
          {vehicles.length ? (
            vehicles.map((vehicle) => {
              return (
                <div key={vehicle.name} className="app__vehicles__card">
                  <Image
                    alt="Vehicles Image"
                    src={getVehiclesImagePath[vehicle.name]}
                    width={280}
                    height={280}
                  />
                  <p className="app__vehicles__card__name">
                    Name: {vehicle.name}
                  </p>
                  <p className="app__vehicles__card__no">
                    Total no: {vehicle.total_no}
                  </p>
                  <p className="app__vehicles__card__speed">
                    Speed: {vehicle.speed}
                  </p>
                  <p className="app__vehicles__card__distance">
                    Max Distance: {vehicle.max_distance}
                  </p>
                </div>
              );
            })
          ) : (
            <div className="app__vehicles__card">
              <p>No Vehicle Found</p>
            </div>
          )}
        </div>
        <Footer />
      </main>
    </div>
  );
}
