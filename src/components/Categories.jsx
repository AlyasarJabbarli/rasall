import img1 from "../assets/images/insaat-removebg.png"
import img2 from "../assets/images/mebel.png"
import img3 from "../assets/images/emlak.png"
import img4 from "../assets/images/texnika.png"
import img5 from "../assets/images/dizayn.png"

import CategoriesCard from "./CategoriesCard";

function Categories() {
    const array = [
        {
            title : "İnşaat",
            img : img1,
            link : "construction",
            color: "#FDC00D",
            margin : "-22px",
            padding : "0"
        },
        {
            title : "Mebel",
            img : img2,
            link : "furniture",
            color: "#6E290B",
            margin : "20px",
            padding : "0 10px"
        },
        {
            title : "Əmlak",
            img : img3,
            link : "real-estate",
            color: "#1E813C",
            margin : "-22px",
            padding : "0"
        },
        {
            title : "İnşaat Texnikası",
            img : img4,
            link : "const-technics",
            color: "#565A57",
            margin : "-22px",
            padding : "0"
        },
        {
            title : "Dizayn",
            img : img5,
            link : "design",
            color: "#1A77BF",    
            margin : "0",
            padding : "0 10px"
        }
    ]
    return ( 
        <section>
            <div className="max-w-screen-xl mx-auto my-[34px] pb-[40px]">
                <div className="flex lg:justify-between flex-wrap md:gap-x-[50px] lg:gap-x-0 items-center gap-y-[40px] justify-center">
                    {
                        array.map((category, index)=>{
                            return <CategoriesCard  title={category.title} img={category.img} link={category.link} color={category.color} margin={category.margin} padding={category.padding} key={index}/>
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Categories;