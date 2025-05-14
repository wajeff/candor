import { useEffect, useState } from 'react' 
import styles from './Hero.module.css'
import toronto from '../../assets/Hero/toronto.jpg'

const wordsToCycle = ["to lease", "to manage", "to grow"]; 

const Hero = () => {

  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      
      // The modulo operator (%) wraps the index back to 0 at the end of the array
      setWordIndex(prevIndex => (prevIndex + 1) % wordsToCycle.length);
    }, 1500); // Adjust time as needed

 
    return () => clearInterval(intervalId);

  }, []); // Empty dependency array means this effect runs only once on mount and cleans up on unmount

  // Get the current word from the array using the current wordIndex
  const currentWord = wordsToCycle[wordIndex];

  return (
    <section className = {styles.hero}>
      <section className={styles[`hero__title-container`]}>
        <h2 className = {styles.hero__title}>
          A better way <br/>{currentWord} {/* Use the currentWord variable here */} <br/>
          <span className ={styles[`hero__title-highlight`]}>with CANDOR</span>    
        </h2>
      </section>
      <section className = {styles[`hero__title-img-container`]}>
        <img
          src={toronto}
          alt='A sketch of the Toronto Waterfront skyline'
          className={styles[`hero__title-img`]}>
        </img>
      </section>
      
    </section>
  )
}

export default Hero