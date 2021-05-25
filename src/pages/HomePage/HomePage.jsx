import styles from './styles.module.css';
import NavBar from '../../components/NavBar/NavBar.jsx';
import Text from '../../components/Text/Text.jsx';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import Button from '../../components/Button/Button.jsx';

const HomePage = () => {
  
  const clouds = <>
      <div className={styles.x1}>
          <div className={styles.cloud}></div>
      </div>
      <div className={styles.x2}>
          <div className={styles.cloud}></div>
      </div>
      <div className={styles.x3}>
          <div className={styles.cloud}></div>
      </div>
      <div className={styles.x4}>
          <div className={styles.cloud}></div>
      </div>
  </>

  return (
    <div className={styles.mainContainer}>
      <NavBar/>

      { /* Clouds: https://codepen.io/Mark_Bowley/pen/xEbuI*/ }
      <div className={styles.backgroundWrap}> 
      {clouds}
      </div>

      { /* Hero Container */ }     
      <div className={styles.homeContainer}>
        <div className={styles.heroInfo}>
          <Text size={6} className={styles.heroTitle}>QUEEF {<Arrow fill='#51DFE0' style={{
            height: '0.7em',
            transform: 'rotate(90deg)'
          }} />}</Text>
        </div>
        <Button color='#21212E' padding='10px'  background='#51DFE0' text='Buy now'/>

      </div>

    </div>
  )
}

export default HomePage;
