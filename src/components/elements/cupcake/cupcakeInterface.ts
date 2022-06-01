
export interface I_CupcakePartToSell {
  id: number;
  sold: boolean;
}

interface I_Cupcake extends I_CupcakePartToSell {
  description: string;
  img: string;
  flavor: string;
  color: string;
  price: number;
}

export default I_Cupcake