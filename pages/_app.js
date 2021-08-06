// Global Styles
import '../styles/globals.css'

// React Toastify Default Styles
import 'react-toastify/dist/ReactToastify.css';

// Component Styles
import '../components/dropdown/dropdown.css';
import '../components/falcone/falcone.css';
import '../components/footer/footer.css';
import "../components/header/header.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
