import { Link } from "react-router-dom";
import { ICategories } from "../../../interface/ICategories";
import "./CategoriesList.css";
import { useEffect, useState } from "react";

interface CategoriesProps {
    categories: ICategories[];
}

const CategoriesList: React.FC<CategoriesProps> = ({ categories }) => {
    const [columns, setColumns] = useState(0);

    useEffect(() => {
        const updateColumns = () => {
            const container = document.querySelector(".grid-layout");
            if (container) {
                const computedStyle = getComputedStyle(container);
                const columnCount = computedStyle.getPropertyValue("grid-template-columns").split(" ").length;
                setColumns(columnCount);
            }
        };

        window.addEventListener("resize", updateColumns);
        updateColumns();

        return () => window.removeEventListener("resize", updateColumns);
    }, []);

    return (
        <>
            <section className="grid-layout">
                {categories.map((item, index) => {
                    const row = Math.floor(index / columns);
                    const column = index % columns;
                    const isEven = (row + column) % 2 === 0;
                    return (
                        <Link to={`/${item.strCategory.toLocaleLowerCase()}`}>
                            <div key={item.idCategory} className={isEven ? "even" : "odd"}>
                                <p>{item.strCategory}</p>
                                <img src={item.strCategoryThumb} alt={item.strCategory} />
                            </div>
                        </Link>
                    )
                })}
            </section>
        </>
    );
};

export default CategoriesList;
