import axios, { AxiosError, AxiosResponse } from "axios";

import { toast } from "react-toastify";

const successHandler = (response: AxiosResponse) => response;

const errorHandler = (error: AxiosError) => {
  toast.error(error.message);
  return Promise.reject(error);
};

export default axios.interceptors.response.use(successHandler, errorHandler);
