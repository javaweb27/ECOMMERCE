import {NavLink} from "react-router-dom"
import { APP_BASE_URL } from "../../APP_BASE_URL"

const RelativeLink = ({path, text}) => (
    <NavLink 
      className="link" 
      activeClassName="active-page" 
      exact
      to={`${APP_BASE_URL}${path}`}>{text}
    </NavLink>
)  
  export default RelativeLink