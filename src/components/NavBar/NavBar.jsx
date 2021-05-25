import styles from './styles.module.css';
import logo from '../../assets/queef.jpg';
import Text from '../Text/Text.jsx';
import { Link } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import React, { useEffect, useState } from 'react';
import usePortal from 'react-useportal';


const NavLink = (props) => {
  return (
    <div className={styles.navLinkDiv}>
      <Link to={{pathname: props.to}} className={styles.navLink}>
        <Text>{props.children}</Text>
      </Link>
    </div>
  )
}

const NavBar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const { Portal } = usePortal({
    bindTo: document.getElementById('root')
  })


  return (
    <div className={styles.container}>
      <Portal>
        <div className={styles.sideMenu}>
          <div className={styles.menu}>

          </div>
          <div className={styles.overlay}>

          </div>
        </div>
      </Portal>

      { /* Logo */ }
      <img src={logo} className={styles.logo}/>
      
      { /* Nav Buttons */ }
      <div className={styles.content}>
        <div className={styles.ticker}>
          <Text>Current Price:</Text>
          <Text size='1' color='grey'>$0.000012</Text>
          <Text size='1.2' color='green'>+0.5%</Text>
        </div>
        
        <div className={styles.links}>
          <NavLink to='#'>How to buy</NavLink>
          <NavLink to='#'>About</NavLink>
          <NavLink to='#'>Charts</NavLink>
          <NavLink to='#'>Telegram</NavLink>
          <NavLink to='#'>WhitePaper</NavLink>
        </div>

        <HamburgerMenu
        isOpen={hamburgerOpen}
        color='#C1C1C1'
        strokeWidth={3}
        className={styles.hamburger}
        menuClicked={() => {setHamburgerOpen(!hamburgerOpen)}}/>

      </div>

    </div>
  )
}

export default NavBar;
