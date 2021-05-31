import styles from './styles.module.css';
import Layout from '../../components/Layout/Layout.jsx';
import Clouds from '../../components/Clouds/Clouds.jsx';
import Page from '../../components/Page/Page.jsx';
import Section from '../../components/Section/Section.jsx';

const HowToBuy = (props) => {
  return (
    <Page>
      
        { /* About Section */ }
        <Section class={styles.aboutContainer}>
          <iframe width="747" height="420" src="https://www.youtube.com/embed/72YYC879Yhc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Section>
    </Page>
  )
}

export default HowToBuy;
