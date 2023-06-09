export type TProductResponse = {
  limit: number;
  products: TProduct[];
  skip: number;
  total: number;
};

export type TProduct = {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
};
