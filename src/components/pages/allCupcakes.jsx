import styles from  "../../styles/cards/cupcake.module.scss"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { startInitialState } from "../redux/actionCreators"
import ContentContainer from "../elements/ContentContainer"
import Cupcake from "../cards/Cupcake"
import useFetchGET from "../hooks/useFetchGET"
import db from "../../../db.json"

const AllCupcakes = () => {
  const [data, error] = useFetchGET("cupcakes")

  const dispatch = useDispatch()
  const cupcakes = useSelector(({cupcakes}) => cupcakes.data)

  useEffect(() => {
    if (cupcakes.length) {
      null
    }
    else if (data && !error) {
      dispatch(startInitialState(data))
    }
    else if (!data && error){
      dispatch(startInitialState([...db.cupcakes], true))
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