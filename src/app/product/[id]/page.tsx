interface ProductProps {
  params: {
    id: string;
  };
}

export default function ProductPage(props: ProductProps) {
  return <p>Product page {props.params.id}</p>;
}
