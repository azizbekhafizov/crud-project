import axios from "axios";
export const fetchData = async (signal) => {
  try {
    const res = await axios.get("https://dummyjson.com/products", {
      signal,
      params: { limit: 100 },
    });
    return res.data;
  } catch (error) {
    console.log("xatolik");
    return [];
  }
};
