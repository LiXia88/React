import React, { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [product, setProduct] = useState<string[]>([]);
  useEffect(() => {
    console.log("Fetching Products in", category);
    setProduct(["Vehicle", "Household"]);
  }, [category]);

  return <div>ProductList</div>;
};

export default ProductList;
