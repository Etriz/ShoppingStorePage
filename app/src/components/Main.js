import React, { useContext } from "react";
import storeContext from "../contexts/StoreContext";

// import faker from "faker";
import ProductCard from "./ProductCard";
import productsJson from "../products.json";

export default function Main() {
  const { cartContents, setCartContents } = useContext(storeContext);

  // let testFake = faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}");

  // const createProduct = () => {
  //   const fakeDesc = faker.lorem.sentences();
  //   const fakePrice = faker.commerce.price();

  //   return { desc: fakeDesc, price: fakePrice };
  // };

  const cardData = productsJson.items.map((item) => (
    <ProductCard
      key={item.sys.id}
      product={item}
      cartContents={cartContents}
      setCartContents={setCartContents}
    />
  ));

  return <main className="container">{cardData}</main>;
}
