import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import taxta from "../assets/images/taxta.jpg"
function HomeSliderCard() {
    return ( 
        <div className="relative overflow-hidden group">
            <Link to="id" className="absolute w-full h-full" />
            <div className="flex flex-col group-hover:left-[80%] transition-[1s] gap-[8px] absolute left-[100%] top-[10px] [&_button]:w-[45px]  [&_button]:bg-unnamed-color-ffffff [&_button]:text-unnamed-color-707070 [&_button]:text-[20px] [&_button]:h-[45px]  [&_button]:shadow-button [&_button]:rounded-[100%]">
                <button className="hover:text-red-600">
                    <FontAwesomeIcon icon={faHeart} />
                </button>
                <button className="hover:text-unnamed-color-fdc00d">
                    <FontAwesomeIcon icon={faCartShopping}  />
                </button>
            </div>
            <div className="h-[280px]">
                <img src={taxta} alt="" />
            </div>
            <div>
                <h3 className="text-[20px] text-unnamed-color-1f1f1f group-hover:text-unnamed-color-fdc00d">Taxta 4x0,50</h3>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col items-start">
                        <Link className="text-unnamed-color-1f1f1f opacity-[63%] text-[16px] relative z-[1] hover:opacity-[100%]">Yeni İnşaat</Link>
                        <p className="relative z-[1] hover:text-red-600 text-unnamed-color-707070"><FontAwesomeIcon icon={faHeart} className=" " /> 5</p>
                    </div>
                    <p className="bg-unnamed-color-fdc00d text-unnamed-color-1f1f1f text-[24px] font-bold py-[5px] px-[18px] rounded-[8px]">80₼</p>
                </div>
            </div>
        </div>
    );
}

export default HomeSliderCard;