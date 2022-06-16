import "./index.scss"
import normalClasses from "./prod-normal.module.scss"
import compactClasses from "./prod-compact.module.scss"
import { I_ProdPartData } from "./prodInterface"
import Prod, { ProdLoadSkeleton } from "./Prod"

interface I_Props {
  products: I_ProdPartData[] | null;
  compact?: boolean
}

const skeletons = [1, 2, 3, 4, 5, 6].map((k) => <ProdLoadSkeleton key={k} />)

const Products = ({ products, compact = false }: I_Props) => {
  return (
    <div className={compact ? "" : "products-container"}>
      {
        !products ? skeletons : products.map(data => (
          <Prod
            key={data.id}
            data={data}
            isCompact={compact}
            classes={compact ? compactClasses : normalClasses}
          />
        ))
      }
    </div>
  )
}

export default Products