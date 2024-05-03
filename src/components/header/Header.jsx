import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faCircleUser } from '@fortawesome/free-regular-svg-icons'
import { useLocation } from 'react-router-dom';

import logo from '../../assets/images/logowhite.png'
import SearchBox from "./SearchBox";

function Header() {
    const location = useLocation();
    const isFullHeader = location.pathname.includes('/login') || location.pathname.includes('/register');
    return (
        <header className="lg:block hidden">
            <div className="border-b-unnamed-color-707070 border-b-[1px] border-b-solid">
                <div className="max-w-screen-xl	 mx-auto h-12 text-unnamed-color-707070 text-[18px] flex items-center  justify-between w-full ">
                    <div className="h-full ">
                        <nav className="h-full	">
                            <ul className="flex h-full items-center gap-6 ">
                                <li><NavLink to={"/contact"}>Əlaqə</NavLink></li>
                                <li><NavLink>RAS İnşaat-da satış</NavLink></li>
                                <li><NavLink>Şirkətlər</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="h-full flex items-center">
                        <div className="mr-[31px]">
                            <Link>
                                <FontAwesomeIcon icon={faCartShopping} className="mr-[9px]" />
                                Səbət
                            </Link>
                        </div>
                        <select name="" id="" className="mr-[22px]">
                            <option value="">AZN</option>
                            <option value="">RUB</option>
                            <option value="">USD</option>
                        </select>
                        <select name="" id="">
                            <option value="">Azərbaycan</option>
                            <option value="">Русский</option>
                            <option value="">English</option>
                        </select>
                    </div>
                </div>
                {
                    isFullHeader ? null :
                        <div className="h-28 bg-unnamed-color-1f1f1f">
                            <div className="h-full max-w-screen-xl	 mx-auto flex items-center gap-[20px] justify-between">
                                <div>
                                    <Link to="/">
                                        <img className="object-contain min-w-[120px] w-[120px]" src={logo} alt="" />
                                    </Link>
                                </div>
                                <SearchBox/>

                                <div className="text-[17px] font-bold text-unnamed-color-ffffff min-w-[434.38px] [&_a]:inline-block flex items-center justify-end">
                                    <Link to="/favorites" className=" mr-[42px]  px-[10px] py-[15px]"><FontAwesomeIcon icon={faHeart} /> Seçilənlər</Link>
                                    <div className="relative inline-block group">
                                        <Link to="/login" className="mr-[13px] rounded-[8px] border-[3px] px-[6px] py-[10px] border-unnamed-color-fdc00d">Hesabım</Link>
                                        <ul className="group-hover:block  hover:block hidden shadow-header top-[100%] z-[11] absolute w-[210px] bg-unnamed-color-ffffff   *:text-unnamed-color-707070 *:text-[15px] [&_li]:border-b-[1px] [&_li]:border-b-[#7070713]  [&_a]:flex [&_a]:justify-between [&_a]:items-center [&_a]:pt-[13px] [&_a]:px-[15px] [&_a]:pb-[10.5px] [&_svg]:text-[21px] ">
                                            <li className="hover:text-unnamed-color-fdc00d">
                                                <Link>Profil <FontAwesomeIcon icon={faCircleUser} /></Link>
                                            </li>
                                            <li className="hover:text-unnamed-color-fdc00d">
                                                <Link>Şirkət səhifəsi</Link>
                                            </li>
                                            <li className="hover:text-unnamed-color-fdc00d">
                                                <Link>İdarəetmə paneli</Link>
                                            </li>
                                            <li className="hover:text-unnamed-color-fdc00d">
                                                <Link>Sifarişlər</Link>
                                            </li>
                                            <li className="hover:text-unnamed-color-fdc00d">
                                                <Link>Geri qaytarılanlar</Link>
                                            </li>
                                            <li className="hover:text-unnamed-color-fdc00d">
                                                <Link>Mesajlar</Link>
                                            </li>
                                            <li className="hover:text-unnamed-color-fdc00d">
                                                <Link>Tənzimləmələr</Link>
                                            </li>
                                            <li className="hover:text-unnamed-color-fdc00d">
                                                <Link>Çıxış et</Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <Link to="/register" className="text-unnamed-color-1f1f1f rounded-[8px] border-[3px] border-unnamed-color-fdc00d px-[6px] py-[10px] bg-unnamed-color-fdc00d">Satışa Başla</Link>
                                </div>
                            </div>
                        </div>
                }

            </div>
        </header>
    );
}

export default Header;