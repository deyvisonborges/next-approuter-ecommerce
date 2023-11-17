import { Suspense, useCallback } from "react";
import { Button } from "./button";
import { ServerComponent } from "./servercomp";

interface ProductProps {
  params: {
    data: string[];
  };
}

// Straming SSR
// Renderizar um componente no lado do servidor de forma parcial
export default async function ProductPage(props: ProductProps) {
  const rs = await fetch(`https://api.github.com/users/deyvisonborges`);
  const json = await rs.json();
  const [productId, size, color] = props.params.data;

  return (
    <>
      <p>Product: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>

      <Button />
      <Suspense fallback={<p>Carregando o server component demorado</p>}>
        <ServerComponent />
      </Suspense>
    </>
  );
}
