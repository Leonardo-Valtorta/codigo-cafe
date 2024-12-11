import "@/styles/globals.css";
import 'flowbite/dist/flowbite.min.css';
import ShoppingContextProvider from "@/context/shoppingContextProvider";

export default function App({ Component, pageProps }) {
  return (
    <ShoppingContextProvider>
      <Component {...pageProps} />
    </ShoppingContextProvider>
  );
}
