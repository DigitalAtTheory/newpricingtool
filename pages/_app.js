import Layout from "../components/Layout";
import { ProductContextProvider } from "../context/ProductContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ProductContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProductContextProvider>
  );
}

export default MyApp;
