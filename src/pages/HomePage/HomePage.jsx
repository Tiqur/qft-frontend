import styles from './styles.module.css';
import NavBar from '../../components/NavBar/NavBar.jsx';
import Text from '../../components/Text/Text.jsx';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';

const HomePage = () => {

  return (
    <div className={styles.mainContainer}>
      <NavBar/>
      <div className={styles.homeContainer}>
        <div className={styles.heroInfo}>
    <Text size={6} className={styles.heroTitle}>QUEEF {<Arrow fill='#51DFE0' style={{
      height: '0.7em',
      transform: 'rotate(90deg)'
    }} />}</Text>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
