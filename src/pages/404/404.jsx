import styles from './styles.module.css';
import Layout from '../../components/Layout/Layout.jsx';
import Page from '../../components/Page/Page.jsx';
import Text from '../../components/Text/Text.jsx';
import Section from '../../components/Section/Section.jsx';

const Poof = (props) => {
  return (
    <Page>
        { /* Poof */ }
        <Section class={styles.aboutContainer}>
          <Text size='15'>404</Text>
          <Text color='grey'>This page does not exist.</Text>
        </Section>
    </Page>
  )
}

export default Poof;
