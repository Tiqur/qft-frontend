import styles from './styles.module.css';
import logo from '../../assets/queef.jpg';
import Text from '../Text/Text.jsx';
import { Link } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import React, { useEffect, useState } from 'react';


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


  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo}/>
      <div className={styles.content}>
        <div className={styles.ticker}>
          <Text>Current Price:</Text>
          <Text size='1' color='grey'>$0.000012</Text>
          <Text size='1.2' color='green'>+0.5%</Text>
        </div>

        <HamburgerMenu 
          color='white'
          className={styles.hamburger}
          isOpen={hamburgerOpen}
          menuClicked={() => {setHamburgerOpen(!hamburgerOpen)}}
          strokeWidth={3}
          />
        
        <div className={styles.links}>
          <NavLink to='#'>How to buy</NavLink>
          <NavLink to='#'>About</NavLink>
          <NavLink to='#'>Charts</NavLink>
          <NavLink to='#'>WhitePaper</NavLink>
          <NavLink to='#'>Telegram</NavLink>
        </div>
      </div>
    </div>
  )
}

export default NavBar;
