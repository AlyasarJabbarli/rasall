import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Login() {
    const [show, setShow] = useState(false)
    const handleClick = (e)=>{
        e.preventDefault()
        setShow(!show)
    }
    return ( 
        <main>
            <div className="text-center pt-[50px]">
                <div className="mx-auto max-w-[250px]">
                    <Logo />
                </div>
                <div className="shadow-custom border-[1px] border-solid border-[#70707047] p-[35px] max-w-[430px] mx-auto rounded-[32px] mt-[50px] mb-[35px]">
                    <form action="">
                        <h2 className="text-unnamed-color-707070 text-[29px] font-bold mb-[32px]">Daxil Ol</h2>
                        <div className="bg-unnamed-color-efefef rounded-[8px] py-[12px] mb-[24px]">
                            <input type="text" placeholder="Telefon nömrəsi və ya email adresi" className="bg-transparent  w-[90%] h-full outline-none"/>
                        </div>
                        <div className="bg-unnamed-color-efefef rounded-[8px] py-[12px] mb-[7px]">
                            <input type={show ? "text" : "password"} placeholder="Şifrə" className="bg-transparent w-[85%] h-full outline-none"/>
                            <button onClick={handleClick}>
                                {show ?  
                                    <FontAwesomeIcon icon={faEyeSlash} />
                                    : <FontAwesomeIcon icon={faEye} />
                                }
                            </button>
                        </div>
                        <div className="text-left mb-[22px]">
                            <Link className="text-[18px] underline text-unnamed-color-707070">Şifrəmi unutmuşam</Link>
                        </div>
                        <button className="text-[18px] rounded-[8px] text-unnamed-color-1f1f1f bg-unnamed-color-fdc00d font-bold w-full py-[10px]">Daxil ol</button>
                        <p className="mt-[12px] text-[18px] text-unnamed-color-707070">Hesabınız yoxdur? <Link to={"/register"} className="underline font-bold text-unnamed-color-1f1f1f">Qeydiyyat</Link></p>
                    </form>
                   
                </div>
            </div>
        </main>
    );
}

export default Login;