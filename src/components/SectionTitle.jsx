import { Link } from "react-router-dom";

function SectionTitle({title, path}) {
    return ( 
        <div className="flex justify-between items-center text-unnamed-color-1f1f1f text-[18px] md:text-[22px] font-bold px-[10px]">
            <h2>{title}</h2>
            <Link className="text-unnamed-color-a7a7a7 md:text-unnamed-color-1f1f1f " to={path}>Hamısına bax</Link>
        </div>
    );
}

export default SectionTitle;