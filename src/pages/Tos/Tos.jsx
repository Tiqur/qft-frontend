import styles from './styles.module.css';
import Layout from '../../components/Layout/Layout.jsx';
import Page from '../../components/Page/Page.jsx';
import PoofGif from '../../assets/poof.gif';
import Text from '../../components/Text/Text.jsx';

const Section = (props) => {
  return (
    <div className={props.class}>
      <Layout>
        {props.children}
      </Layout>
    </div>
  )
}

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
