import classes from "../elements/cupcake/page-cupcake.module.scss"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { startInitialState } from "../redux/reducers/cupcakesSlice"
import useFetchGET from "../hooks/useFetchGET"
import ContentContainer from "../fragments/ContentContainer"
import Cupcake from "../elements/cupcake"
import LoadMessage from "../elements/LoadMessage"
import I_Cupcake from "../elements/cupcake/cupcakeInterface"
import db from "../../../db.json"

const AllCupcakes = () => {
  const dispatch = useDispatch()

  const [data = null, error = null] = useFetchGET("cupcakes")
  const cupcakes: null | I_Cupcake[] = useSelector(({ cupcakesSlice }: any) => cupcakesSlice.cupcakes)

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
                  classes={classes}
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