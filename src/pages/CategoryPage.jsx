import React, { useState, useEffect } from "react";
import axios from "axios";

const CategoryPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products") 
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const uniqueCategories = [
    ...new Set(data.products?.map((item) => item.category)),
  ];

  return (
    <div className="flex gap-5 mt-20 container mx-auto justify-between flex-wrap">
      {uniqueCategories.map((category) => {
        const product = data.products?.find(
          (item) => item.category === category
        );
        return (
          <div
            className="shadow-xl rounded-xl cursor-pointer hover:scale-105 transition-all ease-in-out"
            key={category}
          >
            <div className="bg-white rounded-xl p-4 hover:shadow-xl">
              <div className="w-[250px] h-[300px] overflow-hidden rounded-xl">
                {product && (
                  <img
                    src={product.images[0]}
                    alt={category}
                    className="object-cover w-full h-full"
                  />
                )}
              </div>
              <h2 className="text-center text-2xl mt-4 font-semibold text-gray-800">
                {category}
              </h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryPage;
