import { useEffect } from "react"
import getHeight from "../../functions/getHeight"

const SetHeader = ({ headerForHome }) => {
  useEffect(() => {
    if (!headerForHome) return

    const header = document.querySelector(".header")
    header.classList.add("fixed")
    
    document.onscroll = () => {
      if (window.scrollY >= window.innerHeight - getHeight(header)) {
        header.classList.add("bg-active")
      }
      else {
        header.classList.remove("bg-active")
      }
    }
    
    return () => {
      header.classList.remove("fixed")
      header.classList.remove("bg-active")
      document.onscroll = null
    }
  }, [])

  return null
}

export default SetHeader