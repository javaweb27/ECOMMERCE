import "./pastry-course.scss"
import useHomeTrans from "./useHomeTrans"

const PastryCourse = () => {
  const t = useHomeTrans()

  return (
    <section className="pastry-course">
      <div className="container">
        <h2 className="title">{t.pastryTitle}</h2>
        <p className="description">{t.pastrySubtitle}</p>
        <button className="button">{t.pastryBtn}</button>
      </div>
    </section>
  )
}

export default PastryCourse
