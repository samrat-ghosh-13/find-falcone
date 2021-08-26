// React
import { useState } from "react";

// Global Styles
import "../styles/globals.css";

// React Toastify Default Styles
import "react-toastify/dist/ReactToastify.css";

// Component Styles
import "../components/dropdown/dropdown.css";
import "../components/falcone/falcone.css";
import "../components/footer/footer.css";
import "../components/header/header.css";
import "../components/button/button.css";

// Store
import { DataProvider } from "../store/store";

function MyApp({ Component, pageProps }) {
  const [data] = useState({
    planets: [],
    vehicles: [],
    planet_name: "",
    timeTaken: "",
  });

  return (
    <DataProvider value={data}>
      <Component {...pageProps} />
    </DataProvider>
  );
}

export default MyApp;
