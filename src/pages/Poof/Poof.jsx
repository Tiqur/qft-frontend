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
        <Section class={styles.aboutContainer}>
          <p>

          </p>
        </Section>
    </Page>
  )
}

export default Poof;
