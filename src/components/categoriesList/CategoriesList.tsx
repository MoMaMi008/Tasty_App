import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IMeals } from '../../../interface/IMeals';
import './CategoriesList.css';

const CategoriesList = () => {
    const [recipes, setRecipes] = useState<IMeals[]>([]);
    const [columns, setColumns] = useState(0);

    const { meal } = useParams();

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`)
            .then((res) => res.json())
            .then((data) => {
                setRecipes(data.meals)
                console.log(data.meals);

            })
            .catch((err) => console.log(err))
    }, []);

    useEffect(() => {
        const updateColumns = () => {
            const container = document.querySelector('.categories-list');
            if (container) {
                const computedStyle = getComputedStyle(container);
                const columnCount = computedStyle.getPropertyValue('grid-template-columns').split(' ').length;
                setColumns(columnCount);
            }
        };

        window.addEventListener('resize', updateColumns);
        updateColumns();

        return () => window.removeEventListener('resize', updateColumns);
    }, []);

    return (
        <article className="categories-list">
            {recipes?.map((recipe, index) => {
                const row = Math.floor(index / columns);
                const column = index % columns;
                const isEven = (row + column) % 2 === 0;

                return (

                    // <Link to={`/categories/${meal}/${recipe.idMeal}`}>
                    <div
                        key={index}
                        className="categories-card"
                        style={{
                            backgroundColor: isEven ? '#D4DFC7' : '#96C0B7',
                        }}
                    >
                        <p>{recipe.strMeal}</p>
                        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    </div>
                    // </Link>
                );
            })}
        </article>
    );
}

export default CategoriesList;