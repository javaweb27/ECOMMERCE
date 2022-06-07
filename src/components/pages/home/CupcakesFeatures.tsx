import classes from "./cupcakes-features.module.scss"

const CupcakesFeatures = () => {
  const features: number[] = [1, 2, 3, 4]

  return (
    <section className={classes.container}>
      {
        features.map(f => (
          <article key={f} className={classes.feature}>
            <h3 className={classes.title}>Lorem ipsum sit amet</h3>
            <p className={classes.par}>Enim omnis, neque dignissimos omnis ab quidem dolores at quos, Enim omnis, neque dignissimos at quos.</p>
            <div className={classes["img-container"]}>
              <img src="https://images.unsplash.com/photo-1561817245-7af134029cea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt="prepared cupcakes ecommerce" loading="lazy" />
            </div>
          </article>
        ))
      }
    </section>
  )
}

export default CupcakesFeatures