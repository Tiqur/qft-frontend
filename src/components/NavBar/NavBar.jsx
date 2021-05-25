import styles from './styles.module.css';
import logo from '../../assets/queef.jpg';
import Text from '../Text/Text.jsx';

const NavBar = () => {
  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo}/>
      <div className={styles.content}>
        <div className={styles.ticker}>
          <Text>Current Price:</Text>
          <Text size='1' color='grey'>$0.000012</Text>
          <Text size='1.2' color='green'>+0.5%</Text>
        </div>
        <div className={styles.links}>
          <p>Link1</p>
          <p>Link2</p>
          <p>Link3</p>
        </div>
      </div>
    </div>
  )
}

export default NavBar;
