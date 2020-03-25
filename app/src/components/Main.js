import React from "react";
import faker from "faker";
import ProductCard from "./ProductCard";

export default function Header() {
  // let testFake = faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}");

  const createProduct = () => {
    const fakeName = faker.commerce.productName();
    const fakeImg = faker.image.food();
    const fakeDesc = faker.lorem.sentences();
    const fakePrice = faker.commerce.price();

    console.log({ src: fakeImg, name: fakeName, desc: fakeDesc, price: fakePrice });

    return { src: fakeImg, name: fakeName, desc: fakeDesc, price: fakePrice };
  };

  return (
    <main className="container">
      <ProductCard createProduct={createProduct} />
    </main>
  );
}
