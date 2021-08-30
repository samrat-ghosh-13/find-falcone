// React
import { useState } from "react";

// React Toastify Default Styles
import "react-toastify/dist/ReactToastify.css";

// Global Styles
import "../styles/globals.css";

// Component Styles
import "../styles/dropdown.css";
import "../styles/footer.css";
import "../styles/header.css";
import "../styles/button.css";
import "../styles/falcone.css";

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
