import React, { createContext, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
export const productContext = createContext([]);
export const cartContext = createContext([]);
const Root = () => {
  const { products, initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);
  return (
    <div>
      <productContext.Provider value={products}>
        <cartContext.Provider value={[cart, setCart]}>
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </cartContext.Provider>
      </productContext.Provider>
    </div>
  );
};

export default Root;
