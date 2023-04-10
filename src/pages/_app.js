import Navbar from "@/components/navbar";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
