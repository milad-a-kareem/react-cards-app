type TIdle = "idle";
type TError = "error";
type TPending = "pending";

export type TProduct = {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type TProductState = {
  products: TProduct[];
  status: TPending | TIdle | TError;
};
