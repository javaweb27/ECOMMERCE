import "./index.scss"
import normalClasses from "./product-normal.module.scss"
import compactClasses from "./product-compact.module.scss"
import { I_ProductPartData } from "./productInterface"
import Product from "./Product"
import ProdLoadSkeleton from "./ProdLoadSkeleton"

interface I_Props {
  products: I_ProductPartData[] | null;
  compact?: boolean
}

const skeletons = [1, 2, 3, 4, 5, 6].map((k) => <ProdLoadSkeleton key={k} />)

const Products = ({ products, compact = false }: I_Props) => {
  const classes = compact ? compactClasses : normalClasses

  return (
    <div className={compact ? "" : "products-container"}>
      {
        !products ? skeletons
          : products.map(data => <Product key={data.id} {...data} classes={classes} />)
      }
    </div>
  )
}

export default Products