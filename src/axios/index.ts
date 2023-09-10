import axios from "axios";
import responseInterceptor from "./response-interceptor";

const CustomAxios = axios.create({
  baseURL: "https://fakestoreapi.com",
});

CustomAxios.interceptors.response.eject(responseInterceptor);

export default CustomAxios;
