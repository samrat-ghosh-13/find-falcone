// Next
import Head from "next/head";

// Components
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Falcone from "../layouts/falcone/falcone";
import { ToastContainer } from "react-toastify";

export default function Home() {
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
  return (
    <div>
      <Head>
        <title>Find Falcone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="app">
        <Header buttons={headerButtons} />
        <Falcone />
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </main>
    </div>
  );
}
