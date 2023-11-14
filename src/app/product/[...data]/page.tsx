interface ProductProps {
  params: {
    data: string[];
  };
}

export default function ProductPage(props: ProductProps) {
  const [productId, size, color] = props.params.data;
  return (
    <>
      <p>Product: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>
    </>
  );
}
