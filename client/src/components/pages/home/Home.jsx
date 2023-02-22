import List from "../../cards/List"
import Buttons from "../../temperaments/Buttons"
import styles from './home.module.css'
const Home = () => {
    return(
        <>
        <div className={styles.title}>
            <h1>PI Dogs</h1>
            <h3>Soy Henry</h3>
        </div>
            <Buttons />
            <List /> 
        </>
    )    
}

export default Home