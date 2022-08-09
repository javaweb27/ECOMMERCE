import sklClasses from "./prod-skeleton.module.scss"
import BtnCartAddRemove from "./BtnCartAddRemove"
import I_Prod from "./prodInterface"
import useAllProductsTrans from "../../pages/all-products/useAllProductsTrans"

const Prod = ({ classes, data, isCompact }: I_Prod) => {
  const { cupcake: t } = useAllProductsTrans()

  return (
    <article className={classes.prod}>
      <img src={data.img} alt={data.flavor} loading="lazy" />
      <div className={classes.container}>
        <div className={classes.details}>
          <p>
            {t.par}{" "}
            {
              t.flavors[
                data.flavor === "Vainilla"
                  ? "vanilla"
                  : data.flavor === "Fresa"
                  ? "strawberry"
                  : "chocolate"
              ]
            }
          </p>
          {/* description is obtained from translations */}
          {/* <p>{data.description}</p> */}
          <span>
            {t.color}:{" "}
            {
              t.colors[
                data.color === "amarillo"
                  ? "yellow"
                  : data.color === "marron"
                  ? "brown"
                  : "red"
              ]
            }
          </span>
          <span>
            {t.price}: ${data.price}
          </span>
        </div>

        <BtnCartAddRemove data={data} isCompact={isCompact} />
      </div>
    </article>
  )
}

export const ProdLoadSkeleton = () => (
  <div className={sklClasses.container}>
    <div className={sklClasses.img}></div>
    <div className={sklClasses.lines}>
      <span className={sklClasses.line}></span>
      <span className={sklClasses.line}></span>
      <span className={sklClasses.line}></span>
    </div>
  </div>
)

export default Prod
