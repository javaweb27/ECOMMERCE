import "./index.scss"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startInitialState } from "../../redux/reducers/loadedProductsSlice"
import useFetchGET from "../../hooks/useFetchGET"
import ContentContainer from "../../fragments/ContentContainer"
import LoadMessage from "../../elements/LoadMessage"
import db from "../../../../db.json"
import Products from "../../elements/products"
import { I_ProductPartData } from "../../elements/products/productInterface"

const AllProducts = () => {
  const dispatch = useDispatch()

  const [data = null, error = null] = useFetchGET("cupcakes")
  const loadedProducts: null | I_ProductPartData[] = useSelector(({ loadedProductsSlice }: any) => loadedProductsSlice.products)

  useEffect(() => {
    if (error === true && !loadedProducts) {
      dispatch(startInitialState({ products: db.cupcakes, error: true }))
    }
    else if (error === false) {
      dispatch(startInitialState({ products: data, error }))
    }
  }, [data, error])

  return (
    <ContentContainer>
      <section className="all-products">
        <h1 className="title">Todos los Cupcakes</h1>
        <div>
          <LoadMessage error={error} data={data} products={Boolean(loadedProducts)} />
          <Products products={loadedProducts} />
        </div>
      </section>
    </ContentContainer>
  )
}

export default AllProducts