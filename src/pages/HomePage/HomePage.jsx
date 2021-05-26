import { ReactComponent as Arrow } from '../../assets/arrow.svg';
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
  console.log(props.class)
  return (
    <div className={props.class}>
      <Layout>
        {props.children}
      </Layout>
    </div>
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
              <Text>Queens</Text>
              <Text>United</Text>
              <Text>Educated</Text>
              <Text>E</Text>
              <Text>F</Text>
            </FadeIn>
          </div>

          <Box mt={2} display='flex' flexDirection="row">
            <Button color='secondary' variant='outlined'>View Charts</Button>
            <Button ml={2} color='primary' variant='contained'>Buy Now</Button>
          </Box>
        </div>
      </Section>
      

      { /* About Section */ }
      <Section class={styles.aboutContainer}>
        <Text padding='0 0 0.3em 0'size='4'>About Queef Token:</Text>
        <Text color='grey' size='2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      </Section>
    
      { /* Info Section */ }
      <Section class={styles.infoContainer}>
        <Box display='flex'>
          
        </Box>
      </Section>

      { /* Graph Section */ }
      <Section class={styles.graphContainer}>
      </Section>

      { /* Footer Section */ }
      <Section class={styles.footerContainer}>
      </Section>
    </div>
  )
}

export default HomePage;
