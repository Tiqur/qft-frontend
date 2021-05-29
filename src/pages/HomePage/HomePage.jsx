import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import { ReactComponent as Money } from '../../assets/money.svg';
import { ReactComponent as Drop } from '../../assets/drop.svg';
import { ReactComponent as Vault } from '../../assets/vault.svg';
import { useState, useContext } from 'react';
import { GlobalContext } from '../../components/GlobalContext.jsx';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

import NavBar from '../../components/NavBar/NavBar.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Text from '../../components/Text/Text.jsx';
import Button from '../../components/Button.jsx';
import Layout from '../../components/Layout/Layout.jsx';
import FadeIn from 'react-fade-in';
import Clouds from '../../components/Clouds/Clouds.jsx';
import Page from '../../components/Page/Page.jsx';

import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
  const { marketcapState, liquidityState } = useContext(GlobalContext);
  const [marketcap, setMarketcap] = marketcapState;
  const [liquidity, setLiquidity] = liquidityState;


  return (
    <Page>
    <div className={styles.mainContainer}>


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
              <Text color='#A9A9A9'>Unite</Text>
              <Text color='#A9A9A9'>Educate</Text>
              <Text color='#A9A9A9'>Empower</Text>
              <Text color='#A9A9A9'>Fight</Text>
            </FadeIn>
          </div>

          <Box mt={2} display='flex' flexDirection="row">
            <a target='_blank' href='https://charts.bogged.finance/?token=0xEE40498EB660383722d7CC07b4bcE40d9E51A13F'>
              <Button disableRipple color='secondary' variant='outlined'>View Charts</Button>
            </a>
            <a target='_blank' href='https://exchange.pancakeswap.finance/#/swap'>
              <Button disableRipple ml={2} color='primary' variant='contained'>Buy Now</Button>
            </a>
          </Box>
        </div>
      </Section>
      

      { /* About Section */ }
      <Section class={styles.aboutContainer}>
        <Text padding='0 0 0.3em 0'size='4' id="About">About Queef Token:</Text>
        <Text color='grey' size='2'>Queef (QFT) is a ridiculous & friendly meme token, designed to create an artist-promoter-fan network and functionality. Open to everyone (color, orientation, gender, belief, culture). Ultimately, it will become the driving force (asset) behind SOS. Artists (musicians, performing artists, painters, sculptors, photographers, videographers, graphics designers, etc) who qualify (eligibility factors to be further established) can receive a certain amount of tokens, with which they can use to access events, services, deals, promotion, distribution, possibly even booking/touring support. A lot of the artist - promoter networking will happen within the Queef app/web ecosystem. </Text>
      </Section>
    
      { /* Icon / Info Section */ }
      <Section class={styles.section}>
        <div className={styles.iconContainer}>
          <IconContainer icon={Money} title='Market Cap' info={marketcap}/>
          <IconContainer icon={Drop} title='Liquidity' info={liquidity}/>
          <IconContainer icon={Vault} title='Supply' info='N/A'/>
        </div>
      </Section>

    </div>
    </Page>
  )
}

export default HomePage;
