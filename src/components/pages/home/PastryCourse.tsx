import "./pastry-course.scss"
import useHomeTrans from "./useHomeTrans"

const PastryCourse = () => {
  const t = useHomeTrans()

  return (
    <section className="pastry-course">
      <div className="container">
        <h2 className="title">{t["pastry-title"]}</h2>
        <p className="description">{t["pastry-subtitle"]}</p>
        <button className="button">{t["pastry-btn"]}</button>
      </div>
    </section>
  )
}

export default PastryCourse
