import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchBox() {
    return (
        <div className="flex min-w-[300px] max-w-[831px] w-[100%] h-[42px] border-[1px] border-unnamed-color-c7c7c7 rounded-xl  border-solid bg-unnamed-color-efefef  md:text-[17px] text-[11px]">
            <select name="" id="" className="px-[12px] md:w-[30%] w-[40%] border-r-[1px] border-unnamed-color-c7c7c7 border-solid text-unnamed-color-707070 outline-none bg-transparent">
                <option value="">Bütün Kateqoriyalar</option>
            </select>
            <form action="" className="h-full md:w-[70%] w-[60%] flex items-center justify-between px-[16px] ">
                <input type="text" placeholder="Məhsul və ya xidmət" className="outline-none bg-transparent w-[70%]" />
                <button>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[22px]" />
                </button>
            </form>
        </div>
    );
}

export default SearchBox;