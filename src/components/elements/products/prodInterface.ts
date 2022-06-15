export interface I_ProdPartData {
  id: number;
  sold: boolean;
  description: string;
  img: string;
  flavor: string;
  color: string;
  price: number;
}

export interface I_ProdPartCartAdd extends I_ProdPartData {
  qty: number;
}

export interface I_ProdPartCartRemove {
  qty: number;
  id: number
}

export default interface I_Prod {
  classes: CSSModuleClasses;
  data: I_ProdPartData;
  isCart: boolean;
}
