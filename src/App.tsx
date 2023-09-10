import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch } from "./redux";
import { TAppState } from "./redux/types";
import { getProducts } from "./redux/product/slice";

import Error from "./components/Error";
import ProductList from "./components/ProductList";
import LoadingIndicator from "./components/LoadingIndicator";

import { ERROR, IDLE, PENDING } from "./utils/constants";

import "./App.css";

function App() {
  const status = useSelector(({ product }: TAppState) => product.status);
  const products = useSelector(({ product }: TAppState) => product.products);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const promise = dispatch(getProducts());

    return () => promise.abort();
  }, [dispatch]);

  return (
    <>
      {status === PENDING && <LoadingIndicator />}

      {status === ERROR && <Error />}

      {status === IDLE && <ProductList products={products} />}
    </>
  );
}

export default App;
