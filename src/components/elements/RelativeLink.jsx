import { NavLink, Link } from "react-router-dom"
import { BASE_PATH } from "../../BASE_PATH"

const RelativeLink = ({navLink, link, path, text}) => {
  
  const props = {
    className: "link", 
    to: BASE_PATH + path
  }
  
  if (navLink) {
    props.exact = true
    props.activeClassName = "active-page" 

    return <NavLink {...props}>{text}</NavLink>
  }

  if (link) {
    return <Link {...props}>{text}</Link>
  }
}
  export default RelativeLink