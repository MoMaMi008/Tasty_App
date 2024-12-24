import { Outlet, useParams } from "react-router-dom";
import MealsList from "../../components/mealsList/MealsList";
import "./Categories.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Categories = () => {
    const params = useParams();
    console.log(params);

    if (params.mealID != undefined) {
        return <Outlet />;
    }
    return (
        <>
            <Header />
            <section className="meals">
                <h1>{`Everything ${params.category}`}</h1>
                <MealsList />
            </section>
            <Footer />
        </>
    );
};

export default Categories;
