import React, { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("fetching products in" + category);
    setProducts(["children", "clothing"]);
  }, [category]);
  return <div>ProductList</div>;
};

export default ProductList;
