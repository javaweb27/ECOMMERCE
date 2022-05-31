import classes from "../../styles/elements/nav-menu/nav-menu-link.module.scss";
import { useEffect } from "react"
import getHeight from "../../functions/getHeight"

const SetHeader = ({ headerForHome }: { headerForHome?: boolean }) => {

  useEffect(() => {
    if (!headerForHome) return

    const header = document.querySelector(".header") as HTMLElement

    header.classList.add("fixed", classes.banner)

    document.onscroll = () => {
      if (window.scrollY >= window.innerHeight - getHeight(header)) {
        header.classList.add("bg-active")
        header.classList.remove(classes.banner)
      }
      else {
        header.classList.remove("bg-active")
        header.classList.add(classes.banner)
      }
    }

    return () => {
      header.classList.remove("fixed", "bg-active", classes.banner)
      document.onscroll = null
    }
  }, [])

  return null
}

export default SetHeader
