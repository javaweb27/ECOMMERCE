import "./delivery.scss"
import useHomeTrans from "./useHomeTrans"

const Delivery = () => {
  const t = useHomeTrans()
  // const { t, i18n: { changeLanguage } } = useTranslation("page-home")

  return (
    <section className="delivery">
      <h2 className="title">{t[("delivery-title")]}</h2>
      <p>{t[("delivery-subtitle")]}</p>
    </section>
  )
}

export default Delivery