import { useState } from "react";
import { Link } from "react-router-dom";
import FileInputButton from "../components/FileInputButton";

function UserSettingsPage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const array = ['Profil məlumatları', 'Örtük şəkli', 'Sosial media', 'Şifrəni dəyiş', 'Profili sil']
    const handleClick = (index) => {
        setActiveIndex(index);  // Update the active index
    };


    return (
        <main>
            <div className="max-w-screen-2xl mx-auto pt-[50px]">
                <div>
                    <ul className="flex text-[21px] text-unnamed-color-707070">
                        <li>
                            <Link to={"/"}>Əsas səhifə ></Link>
                        </li>
                        <li>
                            <span>Tənzimləmələr ></span>
                        </li>
                        <li>
                            <span>{array[activeIndex]}</span>
                        </li>
                    </ul>

                    <h1 className="text-[57px] text-unnamed-color-1f1f1f font-bold">{array[activeIndex]}</h1>
                </div>
                <div className="flex gap-[62px]">
                    <div className="max-w-[320px] lg:w-[340px]">
                        <ul className="[&_li]:h-[58px] [&_li]:cursor-pointer [&_li]:p-[13px]  text-[24px]">
                            {array.map((item, index) => (
                                <li
                                    key={index}
                                    className={index === activeIndex ? 'bg-unnamed-color-efefef' : ''}
                                    onClick={() => handleClick(index)}

                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-[-webkit-fill-available]">
                        <div>
                            <img className="mb-[22px] w-[257px] h-[257px] object-cover" src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" alt="" />
                            <FileInputButton />
                        </div>
                        <div className="mt-[46px]">
                            <form action="" className=" [&_div]:mb-[35px] text-[29px] [&_input]:mt-[13px] [&_label]:font-medium [&_input]:w-full [&_input]:h-[72px] [&_input]:outline-none [&_input]:border-[1px] [&_input]:border-unnamed-color-707070 [&_input]:rounded-[10px] [&_input]:p-[12px]">
                                <div className="flex [&_div]:w-[48%] justify-between [&_div]:mb-[0]">
                                    <div className="flex flex-col">
                                        <label htmlFor="">Ad</label>
                                        <input type="text" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="">Soyad</label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="">İstifadəçi adı</label>
                                    <input type="text" />
                                </div>
                                <div>
                                    <label htmlFor="">Ünvan</label>
                                    <input type="text" />
                                </div>
                                <div>
                                    <label htmlFor="">Telefon</label>
                                    <input type="text" />
                                </div>
                                <div>
                                    <label htmlFor="">Mobil</label>
                                    <input type="text" />
                                </div>
                                <div>
                                    <label htmlFor="">E-mail</label>
                                    <input type="text" />
                                </div>
                                <div>
                                    <label htmlFor="">Veb sayt</label>
                                    <input type="text" />
                                </div>
                                <div className="flex justify-center">
                                    <button className=" bg-unnamed-color-fdc00d hover:bg-yellow-400 text-unnamed-color-1f1f1f font-bold py-[13px] px-[81px] rounded-[10px] text-[24px]">Yadda saxla</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>  
        </main>
    );
}

export default UserSettingsPage;