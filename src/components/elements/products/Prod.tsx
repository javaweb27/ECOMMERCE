import sklClasses from "./prod-skeleton.module.scss"
import BtnCartAddRemove from "./BtnCartAddRemove"
import I_Prod from "./prodInterface"

const Prod = ({ classes, data, isCart }: I_Prod) => {
  return (
    <article className={classes.prod}>
      <img className={data.sold ? classes.sold : ""} src={data.img} alt={data.flavor} loading="lazy" />
      <div className={classes.container}>
        <div className={classes.details}>
          <p>{data.description}</p>
          <span>Color: {data.color}</span>
          <span>Precio: {data.price}</span>
        </div>

        <div className={classes.buttons}>
          <BtnCartAddRemove data={data} isCart={isCart} />
        </div>
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
