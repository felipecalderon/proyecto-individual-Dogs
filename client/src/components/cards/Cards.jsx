import DogCard from "./DogCard"
import styles from './cards.module.css'
import { useSelector } from "react-redux"
const Cards = () => {
    const {filteredDogs} = useSelector((state) => state)
    return (
        <div className={styles.cardsFlex}>
        { 
            filteredDogs?.map((dog) => <DogCard key={dog.name} dog={dog} /> )
        }
        </div>
        )    
}

export default Cards