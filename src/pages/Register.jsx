import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Register() {
    const [show, setShow] = useState(false)
    const [showRepeat, setshowRepeat] = useState(false)
    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show)
    }

    const handleClick2 = (e) => {
        e.preventDefault()
        setshowRepeat(!showRepeat)
    }

    const handleCopy = (e) => {
        e.preventDefault();
    };

    return (
        <main>
            <div className="text-center pt-[50px]">
                <div className="mx-auto max-w-[250px]">
                    <Logo />
                </div>
                <div className="shadow-custom border-[1px] border-solid border-[#70707047] p-[35px] max-w-[430px] mx-auto rounded-[32px] mt-[50px] mb-[35px]">
                    <form action="">
                        <h2 className="text-unnamed-color-707070 text-[29px] font-bold mb-[32px]">Qeydiyyat</h2>
                        <div className="flex justify-between mb-[24px]">
                            <div className="bg-unnamed-color-efefef rounded-[8px] py-[12px]  w-[40%]">
                                <input type="text" placeholder="Ad" className="bg-transparent  w-[90%] h-full outline-none" />
                            </div>
                            <div className="bg-unnamed-color-efefef rounded-[8px] py-[12px]  w-[52%]">
                                <input type="text" placeholder="Soyad" className="bg-transparent  w-[90%] h-full outline-none" />
                            </div>
                        </div>
                        <div className="bg-unnamed-color-efefef rounded-[8px] py-[12px] mb-[21px]">
                            <input type="email" placeholder="E-mail" className="bg-transparent  w-[90%] h-full outline-none" />
                        </div>
                        <div className="bg-unnamed-color-efefef rounded-[8px] py-[12px] mb-[21px]">
                            <input type="tel" placeholder="Telefon nömrəsi" className="bg-transparent  w-[90%] h-full outline-none" />
                        </div>
                        <div className="bg-unnamed-color-efefef rounded-[8px] py-[12px] mb-[21px]">
                            <input type={show ? "text" : "password"} onCopy={handleCopy} placeholder="Şifrə" className="bg-transparent w-[85%] h-full outline-none" />
                            <button onClick={handleClick}>
                                {show ?
                                    <FontAwesomeIcon icon={faEyeSlash} />
                                    : <FontAwesomeIcon icon={faEye} />
                                }
                            </button>
                        </div>
                        <div className="bg-unnamed-color-efefef rounded-[8px] py-[12px] mb-[21px]">
                            <input type={showRepeat ? "text" : "password"} onCopy={handleCopy} placeholder="Şifrə təkrar" className="bg-transparent w-[85%] h-full outline-none" />
                            <button onClick={handleClick2}>
                                {showRepeat ?
                                    <FontAwesomeIcon icon={faEyeSlash} />
                                    : <FontAwesomeIcon icon={faEye} />
                                }
                            </button>
                        </div>
                        <button className="text-[19px] rounded-[8px] text-unnamed-color-1f1f1f bg-unnamed-color-fdc00d font-bold w-full py-[10px]">Qeydiyyatdan keç</button>
                        <p className="mt-[12px] text-[18px] text-unnamed-color-707070">Hesabınız var?  <Link to={"/login"} className="underline font-bold text-unnamed-color-1f1f1f">Daxil ol</Link></p>
                    </form>

                </div>
            </div>
        </main>
    );
}

export default Register;