import { useEffect, useState } from 'react';
import { ICategories } from '../../../interface/ICategories'
import './Home.css'
// import { data } from 'react-router-dom';
import CategoriesList from '../../components/categoriesList/CategoriesList';

const Home = () => {
    const [categories, setCategories] = useState<ICategories[]>([])

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(res => res.json())
        .then(data => setCategories(data.categories))
        // console.log(data);
        
    }, [])
    console.log(categories);
    
    return ( 
        
        <section>
            <h1>Or go through our categories</h1>

            <CategoriesList categories={categories}/>
        </section>
        
     );
}
 
export default Home;