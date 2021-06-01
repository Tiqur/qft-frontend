import styles from './styles.module.css';
import Page from '../../components/Page/Page.jsx';
import Section from '../../components/Section/Section.jsx';
import Text from '../../components/Text/Text.jsx';

const About = (props) => {
  return (
    <Page>
        { /* About */ }
        <Section class={styles.aboutContainer}>
          <Text>Coming soon...</Text>
        </Section>
    </Page>
  )
}

export default About;

