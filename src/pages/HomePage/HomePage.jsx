import styles from './styles.module.css';
import NavBar from '../../components/NavBar/NavBar.jsx';

const HomePage = () => {
  return (
    <div className={styles.mainContainer}>
      <NavBar/>
      <p>HomePage</p>
    </div>
  )
}

export default HomePage;
