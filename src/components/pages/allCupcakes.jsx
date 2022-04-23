import styles from "../../styles/cards/cupcake.module.scss"
import useFetchGET from "../hooks/useFetchGET"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { startInitialState } from "../redux/reducers/cupcakesSlice"
import db from "../../../db"
import ContentContainer from "../elements/ContentContainer"
import Cupcake from "../cards/Cupcake"
import LoadMessage from "../elements/LoadMessage"

const AllCupcakes = () => {
  const dispatch = useDispatch()

  const [data = null, error = null] = useFetchGET("cupcakes")
  const { cupcakes } = useSelector(({ cupcakesSlice }) => cupcakesSlice)

  useEffect(() => {
    if (error === true && !cupcakes) {
      dispatch(startInitialState({ cupcakes: db.cupcakes, error: true }))
    }
    else if (error === false) {
      dispatch(startInitialState({ cupcakes: data, error }))
    }
  }, [data, error])

  return (
    <ContentContainer>
      <section className="cupcakes">
        <h1 className="title">Todos los Cupcakes</h1>
        <div className="container">
          <LoadMessage error={error} data={data} cupcakes={Boolean(cupcakes)} />
          {
            cupcakes?.map(({
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
          }
        </div>
      </section>
    </ContentContainer>
  )
}

export default AllCupcakes