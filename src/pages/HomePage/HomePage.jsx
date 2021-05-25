import styles from './styles.module.css';
import NavBar from '../../components/NavBar/NavBar.jsx';
import Text from '../../components/Text/Text.jsx';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box } from '@material-ui/core';



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

        <Box display='flex' flexDirection="row">
          <Button color='secondary' variant='outlined'>View Charts</Button>
          <Button color='primary' variant='contained'>Buy Now</Button>
        </Box>
        </div>

      </div>

    </div>
  )
}

export default HomePage;
