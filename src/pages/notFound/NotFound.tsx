import './NotFound.css'
import SadDumpling from '../../assets/sad-dumpling.png'

const NotFound = () => {
    return ( 
        <section className='not-found'>
            <img src={SadDumpling} alt="404" />
            <h1>404</h1>
            <p>page not found</p>
            <a href="/">Go back to Home-Page</a>
        </section>
     );
}
 
export default NotFound;