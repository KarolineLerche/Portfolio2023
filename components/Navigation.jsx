
import { NavLink } from "react-router-dom";
import Logo from "../assets/frontpage/globe2.png"; 



export default function Navigation(){
    return(
        <nav>
            <NavLink className="NavLink" to="/"><img id="Logo" src={Logo} alt="image of Logo" /></NavLink>
            <NavLink className="NavLink NavText uppercase ScaleHover BlueHover" to="/contactpage"> Contact </NavLink>
            <NavLink className="NavLink NavText uppercase ScaleHover BlueHover" to="/experiencepage"> My work </NavLink>
            <NavLink className="NavLink NavText uppercase ScaleHover BlueHover" to="/aboutpage"> About Me </NavLink>
        </nav>

        
    )
}




