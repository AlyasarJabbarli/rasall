import { Link } from "react-router-dom";

function CategoriesCard({img, title, link, color, margin, padding}) {
    return ( 
        <div className="rounded-[26px] lg:w-[18%] min-w-[200px] h-[139px] md:w-[40%] w-[80%]" style={{backgroundColor: color}} >
            <Link to={link}>
                <h3 className="text-[22px] font-bold text-unnamed-color-efefef  pl-[20px] pt-[10px]">{title}</h3>
                <img className="object-fill max-h-[150px] mx-auto" style={{padding: padding, marginTop : margin}} src={img} alt="" />
            </Link>
        </div>
    );
}

export default CategoriesCard;