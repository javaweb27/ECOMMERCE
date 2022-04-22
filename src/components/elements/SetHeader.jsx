import { banner } from "../../styles/elements/menu-link.module.scss";
import { useEffect } from "react"
import getHeight from "../../functions/getHeight"

const SetHeader = ({ headerForHome }) => {

  useEffect(() => {
    if (!headerForHome) return

    const header = document.querySelector(".header")

    header.classList.add("fixed", banner)
    
    document.onscroll = () => {
      if (window.scrollY >= window.innerHeight - getHeight(header)) {
        header.classList.add("bg-active")
        header.classList.remove(banner)
      }
      else {
        header.classList.remove("bg-active")
        header.classList.add(banner)
      }
    }
    
    return () => {
      header.classList.remove("fixed", "bg-active", banner)
      document.onscroll = null
    }
  }, [])

  return null
}

export default SetHeader
