import CustomAxios from "../axios";

const getProducts = (signal: AbortSignal) =>
  CustomAxios.get("/products", { signal });

export default { getProducts };
