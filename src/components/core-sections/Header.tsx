import "./header.scss"
import linkClasses from "../elements/nav-menu/nav-menu-link.module.scss"
import NavMenu from "../elements/nav-menu"
import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import getHeight from "../../functions/getHeight"

const Header = () => {
  const refHeader = useRef<HTMLElement | null>(null)
  const { pathname } = useLocation()
  const isHome = pathname === "/"

  useEffect(() => {
    if (!isHome) {
      refHeader.current!.classList.remove("fixed", "bg-active", linkClasses.banner)
      document.onscroll = null
      return
    }

    const headerClassList = refHeader.current!.classList

    document.onscroll = () => {
      if (window.scrollY >= window.innerHeight - getHeight(refHeader.current!)) {
        headerClassList.add("bg-active")
        headerClassList.remove(linkClasses.banner)
      } else {
        headerClassList.remove("bg-active")
        headerClassList.add(linkClasses.banner)
      }
    }
  }, [pathname])

  return (
    <header
      ref={refHeader}
      className={"header" + (isHome ? " fixed " + linkClasses.banner : "")}
    >
      <div className="img-container">
        <img
          src="https://images.unsplash.com/photo-1572451479139-6a308211d8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="icono de ecommerce"
        />
      </div>
      <span />
      <NavMenu header />
    </header>
  )
}

export default Header
