import { useEffect, useState } from 'react' 
import styles from './Hero.module.css'

const wordsToCycle = ["Lease", "Manage", "Grow"]; 

const Hero = () => {

  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      
      // The modulo operator (%) wraps the index back to 0 at the end of the array
      setWordIndex(prevIndex => (prevIndex + 1) % wordsToCycle.length);
    }, 1500); // Adjust time as needed

    // Cleanup function: Clear the interval when the component unmounts
    return () => clearInterval(intervalId);

  }, []); // Empty dependency array means this effect runs only once on mount and cleans up on unmount

  // Get the current word from the array using the current wordIndex
  const currentWord = wordsToCycle[wordIndex];

  return (
    <section className = {styles.hero}>
      <h1 className = {styles.hero__title}>
        A Better Way to {currentWord} {/* Use the currentWord variable here */}
      </h1>
      
    </section>
  )
}

export default Hero