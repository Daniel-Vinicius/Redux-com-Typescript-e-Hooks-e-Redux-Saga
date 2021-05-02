import React from "react";
import { useSelector } from "react-redux";

const Catalog: React.FC = () => {
  // const store = useStore();
  // console.log(store);
  // console.log(store.getState());

  const catalog = useSelector((state) => state);
  console.log(catalog);

  return <h1>Catalog</h1>;
};

export default Catalog;
