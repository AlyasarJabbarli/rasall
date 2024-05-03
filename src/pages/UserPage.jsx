import { Link } from "react-router-dom";
import bg from "../assets/images/Screenshot 2024-04-16 203450.png"
import { faEarthAmericas, faEnvelope, faGear, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTiktok, faWhatsapp } from "@fortawesome/free-brands-svg-icons";


function UserPage() {
    return (  
        <main>
            <section>
                <div className="max-w-screen-2xl mx-auto pt-[28px]">
                    <div className="w-full h-[500px]">
                        <img src={bg} alt="" className="w-full h-full object-cover rounded-[15px]" />
                    </div>
                    <div className=" pl-[104px] flex">
                        <div className="w-[329px] h-[329px] rounded-[100%] mt-[-85px]">
                            <img className="rounded-[100%] w-full h-full object-none" src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" alt="" />
                        </div>
                        <div className="ml-[44px] w-[calc(100%-373px)]">
                            <div className="text-unnamed-color-1f1f1f flex items-center justify-between">
                                <h2 className="text-[56px] font-bold">Azər Həmidli</h2>
                                <Link to={"settings"} className=" border-unnamed-color-707070 border-[1px] py-[12px] pl-[13px] pr-[19px] rounded-[8px] font-medium text-[18px]" ><FontAwesomeIcon icon={faGear} className="mr-[12px]" /> Tənzimləmələr</Link>
                            </div>
                            <div>
                                <ul className="flex text-unnamed-color-1f1f1f text-[17px] [&_svg]:text-unnamed-color-707070 [&_svg]:mr-[7px] last:[&_li]:border-none [&_li]:border-r-[1px] [&_li]:border-r-unnamed-color-707070 [&_li]:px-[18.5px] [&_li]:py-[5.5px]">
                                    <li><FontAwesomeIcon icon={faEnvelope} />info@rasinsaat.com</li>
                                    <li><FontAwesomeIcon icon={faPhone} /> +99455 xxx xx xx</li>
                                    <li><FontAwesomeIcon icon={faLocationDot} /> Ziya Bünyadov 17A</li>
                                </ul>
                            </div>
                            <div className="mt-[13px]">
                                <ul className="flex [&_a]:w-[48px] [&_a]:h-[48px] [&_a]:border-[0.7px] [&_a]:border-unnamed-color-707070 [&_a]:rounded-[100%] [&_a]:flex [&_a]:justify-center [&_a]:items-center text-unnamed-color-707070 text-[22px] gap-[10px]">
                                    <li >
                                        <Link className="hover:text-[#128c7e] hover:border-[#128c7e]"><FontAwesomeIcon icon={faWhatsapp} /></Link>
                                    </li>
                                    <li >
                                        <Link className="hover:text-[#3b5998] hover:border-[#3b5998]"><FontAwesomeIcon icon={faFacebookF} /></Link>
                                    </li>
                                    <li >
                                        <Link className="hover:text-[#d62976] hover:border-[#d62976]"><FontAwesomeIcon icon={faInstagram} /></Link>
                                    </li>
                                    <li >
                                        <Link className="hover:text-[#fd3e3e] hover:border-[#fd3e3e]"><FontAwesomeIcon icon={faTiktok} /></Link>
                                    </li>
                                    <li >
                                        <Link className="hover:text-[#00b8ff] hover:border-[#00b8ff]"><FontAwesomeIcon icon={faEarthAmericas} /></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  
        </main>
    );
}

export default UserPage;