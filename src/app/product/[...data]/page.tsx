'use client'

import { useCallback } from "react";

interface ProductProps {
  params: {
    data: string[];
  };
}

export default function ProductPage(props: ProductProps) {
  const [productId, size, color] = props.params.data;

  const onClick = useCallback(() => console.log(`cliquou`), []);

  return (
    <>
      <p>Product: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>

      <button onClick={onClick}>Clique me</button>
    </>
  );
}
