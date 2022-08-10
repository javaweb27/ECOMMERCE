import "./delivery.scss"
import useHomeTrans from "./useHomeTrans"

const Delivery = () => {
  const t = useHomeTrans()
  // const { t, i18n: { changeLanguage } } = useTranslation("page-home")

  return (
    <section className="delivery">
      <h2 className="title">{t.deliveryTitle}</h2>
      <p>{t.deliverySubtitle}</p>
    </section>
  )
}

export default Delivery
