import styles from './styles.module.css';
import Layout from '../../components/Layout/Layout.jsx';
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
