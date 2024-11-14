import "@/styles/globals.css";
import 'flowbite/dist/flowbite.min.css';
import ShoppingContextProvider from "@/context/ShoppingContextProvider";"@/context/ShoppingContextProvider";

export default function App({ Component, pageProps }) {
  return (
    <ShoppingContextProvider>
      <Component {...pageProps} />
    </ShoppingContextProvider>
  );
}
