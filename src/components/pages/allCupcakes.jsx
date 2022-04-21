import styles from  "../../styles/cards/cupcake.module.scss"
import useFetchGET from "../hooks/useFetchGET"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { startInitialState } from "../redux/reducers/cupcakesSlice"
import db from "../../../db"
import ContentContainer from "../elements/ContentContainer"
import Cupcake from "../cards/Cupcake"

const AllCupcakes = () => {
  const [data, error] = useFetchGET("cupcakes")

  const dispatch = useDispatch()
  const cupcakes = useSelector(({cupcakesSlice}) => cupcakesSlice.data)
  
  useEffect(() => {
    if (cupcakes.length) {
      null
    }
    else if (data && !error) {
      
      dispatch(startInitialState({data, error}))
    }
    else if (!data && error){
      dispatch(startInitialState({data: db.cupcakes, error: true}))
    }
  }, [data, error])

  return (
    <ContentContainer>
      <section className="cupcakes">
        <h1 className="title">Todos los Cupcakes</h1>
        <div className="container">
          {
            cupcakes.length ? cupcakes.map(({
              id, 
              description,
              img,
              flavor,
              color,
              price,
              sold
            }) => {
              return (
                <Cupcake
                  styles={styles}
                  key={id}
                  id={id}
                  description={description}
                  img={img}
                  flavor={flavor}
                  color={color}
                  price={price}
                  sold={sold}
                />
              )
            })
            : 
            <span>cargando</span>
          }
        </div>
      </section>
    </ContentContainer>
  )
}

export default AllCupcakes