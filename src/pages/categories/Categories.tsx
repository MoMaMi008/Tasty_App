import CategoriesList from "../../components/categoriesList/CategoriesList";
import './Categories.css';

const Categories = () => {
    return (
        <section className="categories">
            <h1>Everything Beef</h1>
            <CategoriesList />
        </section>
    );
}

export default Categories;