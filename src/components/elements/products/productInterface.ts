export interface I_ProductPartData {
  id: number;
  sold: boolean;
  description: string;
  img: string;
  flavor: string;
  color: string;
  price: number;
}

export default interface I_Product extends I_ProductPartData {
  classes: CSSModuleClasses
}
