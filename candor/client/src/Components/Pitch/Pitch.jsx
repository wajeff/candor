import styles from './Pitch.module.css'

const Pitch = () => {
  return (
    <section classnName = {styles.pitch}>
      <h1 className={styles.pitch__title}>Create your lease in 10 minutes</h1>

      <div className={styles[`pitch__button-container`]}>
        <button className={styles.pitch__button}> Get Started</button>
      </div>

      <section className = {styles[`pitch__paragraph-container`]}>
        <section className = {styles[`pitch__paragraph-section`]}>
          <h2 className = {styles[`pitch__paragraph-title`]}>Free for small landlords</h2>
          <p className = {styles.pitch__paragraph}>Looking to manage just one property? Access the core of Candor’s features for free!</p>
        </section>
        <section className = {styles[`pitch__paragraph-section`]}>
          <h2 className = {styles[`pitch__paragraph-title`]}>Fixed monthly cost</h2>
          <p className = {styles.pitch__paragraph}>Pay our fixed monthly fee for full access to all our features. No hidden fees, no under the table shenanigans. Cancel anytime.</p>
        </section>
        <section className = {styles[`pitch__paragraph-section`]}>
          <h2 className = {styles[`pitch__paragraph-title`]}>No middlemen</h2>
          <p className = {styles.pitch__paragraph}>One month of rent plus HST split between two agents is a thing of the past.</p>
        </section>
      </section>
    </section>
  )
}

export default Pitch