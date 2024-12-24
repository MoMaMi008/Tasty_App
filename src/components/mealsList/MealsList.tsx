import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IMeals } from "../../../interface/IMeals";
import "./MealsList.css";
import { ICategories } from "../../../interface/ICategories";

const MealsList = () => {
    const [recipes, setRecipes] = useState<IMeals[]>([]);
    const [columns, setColumns] = useState(0);

    const params = useParams();



    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.category}`)
            .then((res) => res.json())
            .then((data) => {
                const mealsWithCategory = data.meals.map((meal: IMeals) => ({
                    ...meal,
                    strCategory: params.category as ICategories["strCategory"],
                })) as IMeals[];
                setRecipes(mealsWithCategory);
            })
            .catch((err) => console.log(err));
    }, [params.category]);

    useEffect(() => {
        const updateColumns = () => {
            const container = document.querySelector(".categories-list");
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

    console.log(recipes.map((recipe) => recipe.strCategory));

    return (
        <article className="categories-list">
            {recipes?.map((recipe, index) => {
                const row = Math.floor(index / columns);
                const column = index % columns;
                const isEven = (row + column) % 2 === 0;

                return (
                    <Link to={`/${params.category?.toLowerCase()}/${recipe.idMeal}`}>
                        <div
                            key={index}
                            className="categories-card"
                            style={{
                                backgroundColor: isEven ? "#D4DFC7" : "#96C0B7",
                            }}
                        >
                            <p>{recipe.strMeal}</p>
                            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                        </div>
                    </Link>
                );
            })}
        </article>
    );
};

export default MealsList;
