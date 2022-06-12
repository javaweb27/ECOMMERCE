import classes from "./prod-load-skeleton.module.scss"

const ProdLoadSkeleton = () => (
  <div className={classes.container}>
    <div className={classes.img}></div>
    <div className={classes.lines}>
      <span className={classes.line}></span>
      <span className={classes.line}></span>
      <span className={classes.line}></span>
    </div>
  </div>
)

export default ProdLoadSkeleton