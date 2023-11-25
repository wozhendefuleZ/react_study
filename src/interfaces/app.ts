export type Products = {
  id: any;
  title: String;
  isFruit: Boolean;
};

export type List = {
  list: Array<Products>;
  listClick: (e: Array<Products>) => void;
};
