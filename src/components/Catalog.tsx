import React, { useEffect, useState } from "react";

import CatalogItem from "./CatalogItem";

import api from "../services/api";
import { IProduct } from "../store/modules/cart/types";

const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get("products").then((response) => {
      setCatalog(response.data);
    });
  }, []);

  return (
    <main className="catalog">
      <h1>Catalog</h1>
      {catalog.map((product) => (
        <CatalogItem product={product} key={product.id} />
      ))}
    </main>
  );
};

export default Catalog;
