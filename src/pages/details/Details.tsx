import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Details.css"

interface Meal {
    idMeal: string;
    strMeal: string;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;
    strTags: string;
    strYoutube: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strIngredient5: string;
    strIngredient6: string;
    strIngredient7: string;
    strIngredient8: string;
    strIngredient9?: string;
    strIngredient10?: string;
    strIngredient11?: string;
    strIngredient12?: string;
    strIngredient13?: string;
    strIngredient14?: string;
    strIngredient15?: string;
    strIngredient16?: string;
    strIngredient17?: string;
    strIngredient18?: string;
    strIngredient19?: string;
    strIngredient20?: string;
    strMeasure1: string;
    strMeasure2: string;
    strMeasure3: string;
    strMeasure4: string;
    strMeasure5: string;
    strMeasure6: string;
    strMeasure7: string;
    strMeasure8: string;
    strMeasure9?: string;
    strMeasure10?: string;
    strMeasure11?: string;
    strMeasure12?: string;
    strMeasure13?: string;
    strMeasure14?: string;
    strMeasure15?: string;
    strMeasure16?: string;
    strMeasure17?: string;
    strMeasure18?: string;
    strMeasure19?: string;
    strMeasure20?: string;
    [key: `strIngredient${number}`]: string | undefined;
    [key: `strMeasure${number}`]: string | undefined;
}

const Details = () => {
    const [fetchedData, setFetchedData] = useState<Meal | undefined>(undefined);
    const params = useParams();

    const ingredients: string[] = [];
    const measures: string[] = [];

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealID}`)
            .then(async (resp) => await resp.json())
            .then(async (data) => await data.meals[0])
            .then(async (obj) => await setFetchedData(obj));
    }, [params.mealID]);

    if (fetchedData != undefined) {
        for (let i = 1; i <= 20; i++) {
            const ingredient = fetchedData[`strIngredient${i}`];
            console.log(ingredient);
            const measure = fetchedData[`strMeasure${i}`];
            console.log(measure);

            if (ingredient && measure) {
                ingredients.push(ingredient);
                measures.push(measure);
            }
        }

        return (
            <>
                <Header />
                <section className="details">
                    <img src={fetchedData.strMealThumb} alt="picture of meal" />
                    <article>
                        <h2>{fetchedData.strMeal}</h2>
                        <ul>{fetchedData.strInstructions.split(".").map((step) => step != "" && <li>{step}</li>)}</ul>
                    </article>
                    <article>
                        <h2>Ingredients</h2>
                        <ul>
                            {ingredients.map((ingredient, index) => (
                                <li>{measures[index]} {ingredient}</li>
                            ))}
                        </ul>
                        <a href={fetchedData.strYoutube}>Watch on YouTube</a>
                    </article>
                </section>
                <Footer />
            </>
        );
    }
};

export default Details;
