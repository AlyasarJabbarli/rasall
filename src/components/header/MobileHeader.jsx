import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../Logo";
import { faCartShopping, faCirclePlus, faHeart, faList, faMagnifyingGlass, faUser, faX } from "@fortawesome/free-solid-svg-icons";
import SearchBox from "./SearchBox";
import { useState } from "react";
import { NavLink } from "react-router-dom";


function MobileHeader() {
    let [visible, setVisible] = useState(false)

    let handleClick = () =>{
        setVisible(!visible)
        console.log("Salam");
    }
    return ( 
        <header className="lg:hidden block">
            <div className="flex justify-between px-[20px] py-[15px] pb-[5px]">
                <div className="w-[126px]">
                    <Logo/>

                </div>
                <button className="text-unnamed-color-a7a7a7 text-[25px]" onClick={handleClick}>
                    {
                        visible ? <FontAwesomeIcon icon={faX}/> : <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    }
                    
                </button>
            </div>
            <div className="px-[10px] pb-[20px]">
                {
                    visible ? <SearchBox/> : null 
                }
            </div>
            
            <div className="shadow-mob_header fixed w-full z-[11] bottom-0 bg-unnamed-color-ffffff">
                <ul className="flex items-center justify-between text-unnamed-color-a7a7a7 text-[35px] px-[30px]">
                    <li>
                        <NavLink><FontAwesomeIcon icon={faList} /></NavLink>
                    </li>
                    <li>
                        <NavLink to={"profile"}><FontAwesomeIcon icon={faUser} /></NavLink>
                    </li>
                    <li className="text-unnamed-color-fdc00d text-[60px]">
                        <NavLink to={"add"}><FontAwesomeIcon icon={faCirclePlus} /></NavLink>
                    </li>
                    <li>
                        <NavLink to={"wishlish"}><FontAwesomeIcon icon={faHeart} /></NavLink>
                    </li>
                    <li>
                        <NavLink to={"cart"}><FontAwesomeIcon icon={faCartShopping} /></NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default MobileHeader;