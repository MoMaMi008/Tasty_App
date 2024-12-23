import { ICategories } from '../../../interface/ICategories';
import './CategoriesList.css'

interface CategoriesProps{
    categories: ICategories[]
}

const CategoriesList:React.FC<CategoriesProps> = ({categories}) => {
    return ( 
        <section className='grid-layout'>
            {
                categories.map((item, index) => (
                    
                        <div key={item.idCategory} className={index % 2 === 0 ? 'even' : 'odd'}>
                            <p>{item.strCategory}</p>
                            <img src={item.strCategoryThumb} alt={item.strCategory} />
                        </div>
                    
                ))
            }
        </section>
     );
}
 
export default CategoriesList;