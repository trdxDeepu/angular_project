export type TNavbarLinks = {
  router: string;
  routerName: string;
}[];

export type TProduct = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

export type TProductsDetails = TProduct[];