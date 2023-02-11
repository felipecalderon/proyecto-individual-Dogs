import DogCard from "./DogCard"
import styles from './cards.module.css'
const Cards = ({dogs}) => {
    return (
        <div className={styles.cardsFlex}>
        { 
            dogs?.map((dog) => <DogCard key={dog.id} dog={dog} /> )
        }
        </div>
        )    
}

export default Cards