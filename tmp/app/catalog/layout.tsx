import { ReactNode } from "react";

export default function CatalogLayout(children: ReactNode) {
  return (
    <div>
      <h1>Painel catalogo</h1>
      <div>{children}</div>
    </div>
  );
}
