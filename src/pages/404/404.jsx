import styles from './styles.module.css';
import Layout from '../../components/Layout/Layout.jsx';
import Page from '../../components/Page/Page.jsx';
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

const Poof = (props) => {
  return (
    <Page>
        { /* Poof */ }
        <Section class={styles.aboutContainer}>
          <Text size='20'>404</Text>
          <Text color='grey'>This page does not exist.</Text>
        </Section>
    </Page>
  )
}

export default Poof;
