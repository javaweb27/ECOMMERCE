import "./index.scss"
import normalClasses from "./product-normal.module.scss"
import compactClasses from "./product-compact.module.scss"
import { I_ProductPartData } from "./productInterface"
import Product from "./Product"

interface I_Props {
  products: I_ProductPartData[] | null;
  compact?: boolean
}

const Products = ({ products, compact = false }: I_Props) => {
  const classes = compact ? compactClasses : normalClasses

  return (
    <div className={compact ? "" : "products-container"}>
      {products?.map(data => (
        <Product key={data.id} {...data} classes={classes} />
      ))}
    </div>
  )
}

export default Products