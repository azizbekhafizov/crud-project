import React, { useEffect, useState } from "react";
const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    fetchData(controller.signal).then((data) => {
      setProducts(data);
    });
    return () => {
      controller.abort();
    };
  }, []);

  return <div>ProductsPage</div>;
};

export default ProductsPage;
