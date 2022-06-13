import "./index.scss"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadProducts } from "../../redux/reducers/productsSlice"
import useFetchGET from "../../hooks/useFetchGET"
import ContentContainer from "../../fragments/ContentContainer"
import db from "../../../../db.json"
import Products from "../../elements/products"
import { I_ProductPartData } from "../../elements/products/productInterface"

const AllProducts = () => {
  const dispatch = useDispatch()

  const data: I_ProductPartData[] | null = useFetchGET("cupcakes")
  const { products } = useSelector(({ productsSlice }: any) => productsSlice)

  useEffect(() => {
    if (data === null) {
      dispatch(loadProducts({ products: db.cupcakes }))
    }
    else if (data) {
      dispatch(loadProducts({ products: data }))
    }
  }, [data])

  return (
    <ContentContainer>
      <section className="all-products">
        <h1 className="title">Todos los Cupcakes</h1>
        <Products products={products} />
      </section>
    </ContentContainer>
  )
}

export default AllProducts