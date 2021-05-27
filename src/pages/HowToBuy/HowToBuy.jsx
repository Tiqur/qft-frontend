import NavBar from '../../components/NavBar/NavBar.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import styles from './styles.module.css';
import Layout from '../../components/Layout/Layout.jsx';
import Clouds from '../../components/Clouds/Clouds.jsx';
import Text from '../../components/Text/Text.jsx';
import Page from '../../components/Page/Page.jsx';

const Section = (props) => {
  return (
    <div className={props.class}>
      <Layout>
        {props.children}
      </Layout>
    </div>
  )
}

const HowToBuy = (props) => {
  return (
    <Page>
      
        { /* About Section */ }
        <Section class={styles.aboutContainer}>
          <Text padding='0 0 1em 0'size='3'>How to buy QUEEF:</Text>
          <iframe width="693" height="390" src="https://www.youtube.com/embed/7w8LfmK62V8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Section>
    </Page>
  )
}

export default HowToBuy;
