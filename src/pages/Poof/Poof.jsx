import styles from './styles.module.css';
import NavBar from '../../components/NavBar/NavBar.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Layout from '../../components/Layout/Layout.jsx';
import Clouds from '../../components/Clouds/Clouds.jsx';
import Text from '../../components/Text/Text.jsx';
import Page from '../../components/Page/Page.jsx';
import PoofGif from '../../assets/poof.gif';

const Section = (props) => {
  return (
    <div className={props.class}>
      <Layout>
        {props.children}
      </Layout>
    </div>
  )
}

const Poof = (props) => {
  return (
    <Page>
        { /* Poof */ }
        <Section class={styles.aboutContainer}>
          <img src={PoofGif}/>
        </Section>
    </Page>
  )
}

export default Poof;
