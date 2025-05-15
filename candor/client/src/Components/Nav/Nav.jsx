import styles from './Nav.module.css';
import logo from '../../assets/Nav/logo.png'

const Nav = () => {
  return (
    <nav className = {styles.nav}>
      <img className = {styles.nav__logo} src ={logo}></img>
      <button className = {styles.nav__button}> <a href='/Editor'>Login</a></button>
    </nav>
  )
}

export default Nav