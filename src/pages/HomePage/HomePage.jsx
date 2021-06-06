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
import Section from '../../components/Section/Section.jsx';

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';

import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



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
  const [arrowState, setArrowState] = useState(true);
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
              <Text color='#A9A9A9'>Uplift</Text>
              <Text color='#A9A9A9'>Embrace</Text>
              <Text color='#A9A9A9'>Educate</Text>
              <Text color='#A9A9A9'>Fight</Text>
            </FadeIn>
          </div>

          <Box mt={2} display='flex' flexDirection="row">
            <a target='_blank' href='https://charts.bogged.finance/?token=0xEE40498EB660383722d7CC07b4bcE40d9E51A13F'>
              <Button disableRipple color='secondary' variant='outlined'>View Charts</Button>
            </a>
            <Link to='/buy-now'>
              <Button disableRipple ml={2} color='primary' variant='contained'>Buy Now</Button>
            </Link>
          </Box>
        </div>
      </Section>

      { /* About Section */ }
      <Section class={styles.aboutContainer}>
        <Text padding='0 0 0.3em 0'size='4' id="About">About Queef Token:</Text>
        <Text color='grey' size='2'>
          QFT is a token that isn't afraid to aim high. It is being developed with multiple goals in mind. In its initial phase it will be incorporated into a direct artist-fan-vendor network and market place that will bring millions of artists and fans into the crypto world.
        </Text>
        <br/>
        <Text color='grey' size='2'>
          In it's next step it will become the driving force behind the SOST platform, which is being developed to provide financial assistance to service members, veterans, EMTs, peace officers and firefighters who are struggling to access the care they need.
        </Text>
        <br/>
        <Text color='grey' size='2'>
          QFT is open to everyone, regardless of their color, orientation, gender, background or belief.
        </Text>
        <br/>
        <Text color='grey' size='2'>
          Everyone knows that nowadays artists get pennies on the dollar when they put their art on places like iTunes & Spotify. Every single day veterans who have sacrificed so much for us all end up homeless on the streets, not being able to access the quality care they need. QFT aims to take on these big issues and change the world in a very meaningful way.
        </Text>
      </Section>
    
      { /* Icon / Info Section */ }
      <Section class={styles.section}>
        <div className={styles.iconContainer}>
          <IconContainer icon={Money} title='Market Cap' info={marketcap}/>
          <IconContainer icon={Drop} title='Liquidity' info={liquidity}/>
          <IconContainer icon={Vault} title='Supply' info='69,696,420,420'/>
        </div>
      </Section>

    { /* RoadMap */ }
    <Section class={styles.section}>
      <Timeline>

        <TimelineItem>
          <TimelineOppositeContent>
            <Text size='2'>Q2 2021</Text>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Text>Telegram, Instagram, Tik Tok Launched</Text>
            <Text>Partnered w/ Only Fans Model: Crypto Nova</Text>
            <Text>Partnered w/ Recording Co.: The Lazy Cocoon</Text>
            <Text>Partnered w/ Jewelry Store: Smokey Mountain Diamonds</Text>
            <Text>Whitepaper Published</Text>
            <Text>Applied Copyright and Trademark</Text>
            <Text>QFT Token Launched</Text>
            <Text>Website Launched</Text>
            <Text>Marketing Team Hired</Text>
            <Text>Passed Soft Audit/ Added to rugfreecoins.com</Text>
            <Text>The team and community is expanding and continues to grow</Text>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
            <Text size='2'>Q3 2021</Text>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Text>Pass Official Audit</Text>
            <Text>Continue building Website and Database</Text>
            <Text>Increase number of partnerships and participating vendors</Text>
            <Text>Commence pre-production on mobile app development (hybrid app)</Text>
            <Text>YouTube Channel Launched</Text>
            <Text>Design Limited edition Merchandise</Text>
            <Text>Coingeiko/ other listings </Text>
            <Text>Have 1500+ holders</Text>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
            <Text size='2'>Q4 2021</Text>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Text>Partnerships with more businesses</Text>
            <Text>Have 2000+ holders</Text>
            <Text>Trademark Registered</Text>
            <Text>Merch Store to support our operating expenses (10% Revenue to Charity)</Text>
            <Text>Commence Mobile App development</Text>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>
            <Text size='2'>Q1 2022</Text>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
            <Text>Aligned with even more Charities and Vendors</Text>
            <Text>Aligned with 1st Responders</Text>
            <Text>Aligned with prominent artists around the world</Text>
            <Text>Continued Mobile App Development and Beta Testing</Text>
            <Text>Continued Database construction and enhancement</Text>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Section>
    </div>
    </Page>
  )
}

export default HomePage;
