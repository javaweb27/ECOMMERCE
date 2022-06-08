export interface I_ProductPartSell {
  id: number;
  sold: boolean;
}

export interface I_ProductPartData extends I_ProductPartSell {
  description: string;
  img: string;
  flavor: string;
  color: string;
  price: number;
}

export default interface I_Product extends I_ProductPartData {
  classes: CSSModuleClasses
}
