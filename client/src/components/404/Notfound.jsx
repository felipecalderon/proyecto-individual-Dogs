import { useEffect, useState } from "react"
import styles from './notfound.module.css'
const url = 'https://api.giphy.com/v1/gifs/search?q=not+found&api_key=kN5fNTLnul4hIrxbTg9XqYSbNSqwjkAc'

const Not = () => {
    const [gif, setGif] = useState('https://cdn.dribbble.com/users/1680506/screenshots/5472165/animal.gif')
    useEffect(() => {
        fetch(url).then(res => res.json())
        .then(data => {
            let random = Math.floor(Math.random()*data.data.length)
            setGif(data.data[random].images.original.url)
        })
    }, [])
    
    return <div className={styles.div}>
            <h3>No se encontró</h3>
            <img src={gif} alt='404 not found'/>
        </div>
}

export default Not