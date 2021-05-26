import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import { ReactComponent as Money } from '../../assets/money.svg';
import { ReactComponent as Drop } from '../../assets/drop.svg';
import { ReactComponent as Vault } from '../../assets/vault.svg';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { Box } from '@material-ui/core';
import styles from './styles.module.css';
import NavBar from '../../components/NavBar/NavBar.jsx';
import Text from '../../components/Text/Text.jsx';
import Button from '../../components/Button.jsx';
import Layout from '../../components/Layout/Layout.jsx';
import FadeIn from 'react-fade-in';

const Section = (props) => {
  return (
    <div className={props.class}>
      <Layout>
        {props.children}
      </Layout>
    </div>
  )
}


const IconContainer = (props) => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      <props.icon fill='#51DFE0' className={styles.icon}/>
      <Text size='3'>{props.info}</Text>
      <Text color='grey' size='2'>{props.title}</Text>
    </Box>
  )
}


const HomePage = () => {
  const [arrowState, setArrowState] = useState(false);
  
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
      <div className={styles.x5}>
          <div className={styles.cloud}></div>
      </div>
      <div className={styles.x6}>
          <div className={styles.cloud}></div>
      </div>
      <div className={styles.x7}>
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
      <Section class={styles.homeContainer}>
        <div className={styles.heroInfo}>
          <Text size={6} className={styles.heroTitle}>QUEEF {<Arrow className={styles.arrow} fill='#51DFE0' style={{
            height: '0.7em',
            transition: '200ms',
            transform: arrowState ? 'rotate(90deg)' : 'rotate(270deg)'
          }} onClick={() => {
            setArrowState(!arrowState);
          }}/>}</Text>
      
          { /* Fade in Acronym */ }
          <div style={{display: arrowState ? 'initial' : 'none'}}>
            <FadeIn visible={arrowState}>
              <Text color='#A9A9A9'>Queens</Text>
              <Text color='#A9A9A9'>United</Text>
              <Text color='#A9A9A9'>Educated</Text>
              <Text color='#A9A9A9'>E</Text>
              <Text color='#A9A9A9'>F</Text>
            </FadeIn>
          </div>

          <Box mt={2} display='flex' flexDirection="row">
            <Button disableRipple color='secondary' variant='outlined'>View Charts</Button>
            <Button disableRipple ml={2} color='primary' variant='contained'>Buy Now</Button>
          </Box>
        </div>
      </Section>
      

      { /* About Section */ }
      <Section class={styles.aboutContainer}>
        <Text padding='0 0 0.3em 0'size='4'>About Queef Token:</Text>
        <Text color='grey' size='2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      </Section>
    
      { /* Icon / Info Section */ }
      <Section class={styles.section}>
        <Box justifyContent='space-around' display='flex'>
          <IconContainer icon={Money} title='Market Cap' info='6,969,420,420'/>
          <IconContainer icon={Drop} title='Liquidity' info='$80,392'/>
          <IconContainer icon={Vault}title='Supply' info='6,394,881,630'/>
        </Box>
      </Section>



      { /* Footer Section */ }
      <Section class={styles.footerContainer}>
      </Section>
    </div>
  )
}

export default HomePage;
