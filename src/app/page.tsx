// import Image from "next/image";

import Footer from "./pages/Footer";
import { Navbar } from "./pages/Header";
import Categories from "./pages/categories";
import HomePage from "./pages/homepage";
import ProductListing from "./pages/productList";

export default function Home() {
  return (
    <div >
      <Navbar/>
      <HomePage/>
      <Categories/>
      <ProductListing/>
      <Footer/>
    </div>
  );
}
