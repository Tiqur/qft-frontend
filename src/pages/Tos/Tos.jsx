import styles from './styles.module.css';
import Layout from '../../components/Layout/Layout.jsx';
import Page from '../../components/Page/Page.jsx';
import PoofGif from '../../assets/poof.gif';
import Text from '../../components/Text/Text.jsx';
import Section from '../../components/Section/Section.jsx';


const Tos = (props) => {
  return (
    <Page>
        { /* Tos */ }
        <Section class={styles.aboutContainer}>
          <Text>Coming soon...</Text>
        </Section>
    </Page>
  )
}

export default Tos;
