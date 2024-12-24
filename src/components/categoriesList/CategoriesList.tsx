import { Link } from "react-router-dom";
import { ICategories } from "../../../interface/ICategories";
import "./CategoriesList.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";

interface CategoriesProps {
    categories: ICategories[];
}

const CategoriesList: React.FC<CategoriesProps> = ({ categories }) => {
    return (
        <>
            <Header />
            <section className="grid-layout">
                {categories.map((item, index) => (
                    <Link to={`/${item.strCategory}`}>
                        <div key={item.idCategory} className={index % 2 === 0 ? "even" : "odd"}>
                            <p>{item.strCategory}</p>
                            <img src={item.strCategoryThumb} alt={item.strCategory} />
                        </div>
                    </Link>
                ))}
            </section>
            <Footer />
        </>
    );
};

export default CategoriesList;
