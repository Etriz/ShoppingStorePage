import React from "react";
// import faker from "faker";
import ProductCard from "./ProductCard";
import productsJson from "../products.json";

export default function Main() {
  // let testFake = faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}");

  // const createProduct = () => {
  //   const fakeDesc = faker.lorem.sentences();
  //   const fakePrice = faker.commerce.price();

  //   return { desc: fakeDesc, price: fakePrice };
  // };

  const cardData = productsJson.items.map(product => <ProductCard product={product} />);

  return <main className="container">{cardData}</main>;
}
