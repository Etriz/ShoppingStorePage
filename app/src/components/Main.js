import React from "react";
import faker from "faker";
import ProductCard from "./ProductCard";

export default function Header() {
  // let testFake = faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}");

  const createProduct = () => {
    const fakeDesc = faker.lorem.sentences();
    const fakePrice = faker.commerce.price();
    // log the fake data just to make sure we get results
    // console.log({ src: fakeImg, name: fakeName, desc: fakeDesc, price: fakePrice });

    return { desc: fakeDesc, price: fakePrice };
  };

  return (
    <main className="container">
      <ProductCard createProduct={createProduct} />
    </main>
  );
}
