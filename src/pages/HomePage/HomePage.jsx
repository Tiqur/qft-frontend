import styles from './styles.module.css';
import NavBar from '../../components/NavBar/NavBar.jsx';

const HomePage = () => {
  return (
    <div className={styles.mainContainer}>
      <NavBar/>
      <div className={styles.homeContainer}>

      </div>
    </div>
  )
}

export default HomePage;
