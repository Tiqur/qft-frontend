import styles from './styles.module.css';
import Page from '../../components/Page/Page.jsx';
import Section from '../../components/Section/Section.jsx';
import Text from '../../components/Text/Text.jsx';

const About = (props) => {
  return (
    <Page>
        { /* About */ }
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
    </Page>
  )
}

export default About;

