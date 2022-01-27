import styles from "../../styles/cards/feature.module.scss"

const Feature = () => {
  return (
    <article className={styles.feature}>
      <h3 className={styles.title}>Lorem ipsum sit amet</h3>
      <p className={styles.par}>Enim omnis, neque dignissimos perspiciatis ab quidem dolores at quos, Enim omnis, neque dignissimos perspiciatis.</p>
      <div className={styles["img-container"]}>
        <img src="https://images.unsplash.com/photo-1561817245-7af134029cea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt="prepared cupcakes EDcupcake" loading="lazy" />
      </div>
    </article>
  )
}

export default Feature