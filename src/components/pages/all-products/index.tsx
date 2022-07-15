import "./index.scss"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks"
import { loadProducts } from "../../redux/reducers/productsSlice"
import useFetchGET from "../../hooks/useFetchGET"
import ContentContainer from "../../fragments/ContentContainer"
import db from "../../../../db.json"
import Products from "../../elements/products"
import { I_ProdPartData } from "../../elements/products/prodInterface"

const AllProducts = () => {
  const dispatch = useAppDispatch()

  const data: I_ProdPartData[] | null = useFetchGET("cupcakes")
  const { products } = useAppSelector(({ products }) => products)

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