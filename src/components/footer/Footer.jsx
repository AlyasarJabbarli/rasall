import { Link } from "react-router-dom";
import visa from "../../assets/images/visa.svg"
import master from "../../assets/images/master-card.svg"

import { faFacebookF, faInstagram, faTiktok, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../Logo";
function Footer() {
    return (
        <footer>
            <div className="text-unnamed-color-1f1f1f mt-[60px] mb-[90px]">
                <div className="pt-[30px] pb-[30px] bg-unnamed-color-efefef">
                    <div className="max-w-screen-xl mx-auto flex justify-between text-center items-center flex-col lg:text-start lg:items-start  lg:flex-row ">
                        <div className="max-w-[330px]">
                            <div className="w-[60%] mx-auto">
                            <Logo/>

                            </div>
                            <p className="text-[18px]  mt-[45px] mb-[56px]">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting
                            </p>
                            <Link to="tel:+994 12 123 98 58" className="text-[24px] ">
                                +994 12 123 98 58
                            </Link>
                        </div>
                        <div className="pt-[60px]">
                            <h4 className="text-[22px] font-bold mb-[22px]">Kateqoriyalar</h4>
                            <ul className="text-[18px] flex flex-col gap-[10px]">
                                <li>
                                    <Link>İnşaat materialları</Link>
                                </li>
                                <li>
                                    <Link>Mebel</Link>
                                </li>
                                <li>
                                    <Link>Əmlak</Link>
                                </li>
                                <li>
                                    <Link>İnşaat Texnikası</Link>
                                </li>
                                <li>
                                    <Link>Dizayn</Link>
                                </li>
                                <li>
                                    <Link>Təmir Tikinti</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="pt-[60px]">
                            <h4 className="text-[22px] font-bold mb-[35px]">Haqqında</h4>
                            <ul className="text-[18px] flex flex-col gap-[10px]">
                                <li>
                                    <Link>RAS İnşaat</Link>
                                </li>
                                <li>
                                    <Link>Qaydalar və şərtlər</Link>
                                </li>
                                <li>
                                    <Link>İstifadəçi razılaşması</Link>
                                </li>
                                <li>
                                    <Link>Ras inşaatda satış</Link>
                                </li>

                            </ul>
                        </div>
                        <div className="pt-[60px] max-w-[330px]">
                            <div className="h-[170px]">
                                <h4 className="text-[22px] font-bold mb-[35px]">Sosial media</h4>
                                <ul className="flex gap-[23px] text-unnamed-color-a7a7a7 text-[20px] lg:justify-start justify-center">
                                    <li className="duration-75	  hover:text-[#4267B2] hover:text-[23px] ">
                                        <Link><FontAwesomeIcon icon={faFacebookF} /></Link>
                                    </li>
                                    <li className="duration-75	 hover:text-[#E1306C] hover:text-[23px]">
                                        <Link><FontAwesomeIcon icon={faInstagram} /></Link>
                                    </li>
                                    <li className="duration-75	 hover:text-[#ff0050] hover:text-[23px]">
                                        <Link><FontAwesomeIcon icon={faTiktok} /></Link>
                                    </li>
                                    <li className="duration-75	 hover:text-[#000000] hover:text-[23px]">
                                        <Link><FontAwesomeIcon icon={faXTwitter} /></Link>
                                    </li>
                                    <li className="duration-75	 hover:text-[#FF0000] hover:text-[23px]">
                                        <Link><FontAwesomeIcon icon={faYoutube} /></Link>
                                    </li>
                                </ul>
                            </div>
                            <div >
                                <h4 className="text-[22px] font-bold mb-[36px]">Xəbər bülleteni</h4>
                                <form action="" className="flex items-center">
                                    <input type="text" placeholder="E-mail daxil edin" className="outline-none border-none max-w-[264px] text-[18px] color-unnamed-color-707070 pl-[12px] py-[10px] pb-[18px] rounded-l-[7px]" />
                                    <button className="bg-unnamed-color-1f1f1f text-[18px] text-unnamed-color-ffffff font-bold  rounded-r-[7px] pl-[25px] py-[14px] pr-[24px]">Qoşul</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="max-w-screen-xl mx-auto pt-[10px] pb-[10px] flex items-center justify-between">
                    <p className="md:text-[16px] text-[13px]">Copyright 2024. Bütün hüquqları qorunur.</p>
                    <div className="flex gap-[15px] items-center">
                        <img className="w-[40px] h-[48.55px] object-cover" src={visa} alt="" />
                        <img className="w-[40px] h-[48.55px] object-cover" src={master} alt="" />
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;