import { Link } from "react-router-dom";
import logo from "../assets/images/logomain.png"


function Logo() {
    return ( 
        <Link to={"/"} className="block	w-fit mx-auto">
            <img src={logo} alt=""  />
        </Link>
    );
}

export default Logo;