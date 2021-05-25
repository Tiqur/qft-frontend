import styles from './styles.module.css';
import logo from '../../assets/queef.jpg';
import Text from '../Text/Text.jsx';
import { Link } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import React, { useEffect, useState } from 'react';
import usePortal from 'react-useportal';
import Layout from '../../components/Layout/Layout.jsx';


const NavLink = (props) => {
  return (
    <div className={styles.navLinkDiv}>
      <Link to={{pathname: props.to}} className={styles.navLink}>
        <Text>{props.children}</Text>
      </Link>
    </div>
  )
}


const SideBar = (props) => {
  return (
    <div className={styles.sideMenu}>
      <div className={styles.menu}>
        {props.children}
      </div>
      <div className={styles.overlay} onClick={() => {props.setHamburgerOpen(false)}}/>
    </div>
  )
}

const NavBar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
    
  // Create portal to root otherwise will not fill full height
  const { Portal } = usePortal({
    bindTo: document.getElementById('root')
  })


  const links = <>
    <NavLink to='#'>How to buy</NavLink>
    <NavLink to='#'>About</NavLink>
    <NavLink to='#'>Charts</NavLink>
    <NavLink to='#'>Telegram</NavLink>
    <NavLink to='#'>WhitePaper</NavLink>
  </>

  return (
    <Layout>
      <div className={styles.container}>

        { /* Side Menu */ }
        {hamburgerOpen && 
          <Portal className={styles.sideMenu}>
            <SideBar setHamburgerOpen={setHamburgerOpen}>
              {links}
            </SideBar>
          </Portal>
        }

        { /* Logo */ }
        <img src={logo} className={styles.logo}/>
        
        { /* Nav Buttons */ }
        <div className={styles.content}>
          <div className={styles.ticker}>
            <Text>Current Price:</Text>
            <Text size='1' color='grey'>$0.000012</Text>
            <Text size='1.2' color='green'>+0.5%</Text>
          </div>
   

          { /* Top nav links */ }
          <div className={styles.links}>
            {links}
          </div>

          <HamburgerMenu
          isOpen={hamburgerOpen}
          color='#C1C1C1'
          strokeWidth={3}
          className={styles.hamburger}
          menuClicked={() => {setHamburgerOpen(!hamburgerOpen)}}/>

        </div>

      </div>
    </Layout>
  )
}

export default NavBar;
