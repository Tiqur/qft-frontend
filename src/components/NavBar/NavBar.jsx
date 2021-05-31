import styles from './styles.module.css';
import Button from '../../components/Button.jsx';
import logo from '../../assets/queef.jpg';
import Text from '../Text/Text.jsx';
import { Link } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import React, { useEffect, useState, useContext } from 'react';
import usePortal from 'react-useportal';
import Layout from '../Layout/Layout.jsx';
import { GlobalContext } from '../../components/GlobalContext.jsx';


const NavLink = (props) => {
  const button = <Button 
    p={1}
    disableRipple
    variant={props.outlined ? 'outlined' : 'text'} 
    size={props.scrollPos == 0 ? 'large' : 'small'}
    color='secondary'>{props.text}</Button>
  
  return (
    <div className={styles.navLinkDiv}>
      { props.to.includes('http')
      ?  <a style={{ textDecoration: 'none' }} target='_blank' href={props.to}>{button}</a>
      :  <Link style={{ textDecoration: 'none' }} to={{pathname: props.to}}>{button}</Link>
      }
    </div>
  )
}


const SideBar = (props) => {
  return (
    <div className={styles.sideMenu}>
      <div className={styles.overlay} onClick={() => {props.setHamburgerOpen(false)}}/>
      <div className={styles.menu}>
        {props.children}
      </div>
    </div>
  )
}

const NavBar = () => {
  const { priceState, changeState } = useContext(GlobalContext);
  const [price, setPrice] = priceState;
  const [change, setChange] = changeState;
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  
  const scrollHandle = () => {
    if (window.innerWidth <= 899) {
      setScrollPos(false)
    } else {
     setScrollPos(window.pageYOffset)
    }
  }
  
  // Update scroll pos
  useEffect(() => {
      window.addEventListener('scroll', scrollHandle, { passive: true });

      return () => {
          window.removeEventListener('scroll', () => {setScrollPos(window.pageYOffset)});
      };
  }, []);
  
  // Create portal to root otherwise will not fill full height
  const { Portal } = usePortal({
    bindTo: document.getElementById('root')
  })


  const links = <>
    <NavLink scrollPos={scrollPos} to='/' text='Home'/>
    <NavLink scrollPos={scrollPos} to='how-to-buy' text='How to buy'/>
    <NavLink scrollPos={scrollPos} to='charts' text='Charts'/>
    <NavLink scrollPos={scrollPos} to='#' text='Socials'/>
    <NavLink scrollPos={scrollPos} outlined to='/whitepaper' text='WhitePaper'/>
  </>

  return (
    <div className={scrollPos == 0 ? styles.container : styles.containerScrolled}>
      <div className={styles.innerContainer}>
        { /* Side Menu */ }
        {hamburgerOpen && 
          <Portal className={styles.sideMenu}>
            <SideBar setHamburgerOpen={setHamburgerOpen}>
              {links}
            </SideBar>
          </Portal>
        }

        { /* Logo */ }
        <img src={logo} className={scrollPos == 0 ? styles.logo : styles.logoScrolled}/>
        
        { /* Nav Buttons */ }
        <div className={styles.content}>
          <div className={styles.ticker}>
            <Text>Current Price:</Text>
            <Text margin='0 0 0 0.4em' size='1.4' color='grey'>{price}</Text>
            <Text margin='0 0 0 0.4em' size='1.4' color='#A32A25'>{change}</Text>
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

    </div>
  )
}

export default NavBar;
