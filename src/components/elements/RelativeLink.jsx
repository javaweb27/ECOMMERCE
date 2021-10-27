import { NavLink } from "react-router-dom"
import { BASE_PATH } from "../../BASE_PATH"

const RelativeLink = ({path, text}) => (
    <NavLink 
      className="link" 
      activeClassName="active-page" 
      exact
      to={BASE_PATH + path}
    >{text}
    </NavLink>
)  
  export default RelativeLink