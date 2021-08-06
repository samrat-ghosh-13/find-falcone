import Head from "next/head";
import styles from "../styles/Home.module.css";

// Components
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Falcone from "../components/falcone/falcone";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Find Falcone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="app">
        <Header />
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
