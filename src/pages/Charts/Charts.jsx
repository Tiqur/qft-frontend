import styles from './styles.module.css';
import Layout from '../../components/Layout/Layout.jsx';
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

const Charts = (props) => {
  return (
    <Page>
        { /* Charts */ }
        <Section class={styles.aboutContainer}>
          <iframe width='100%' height={window.innerHeight} src='https://poocoin.app/tokens/0xee40498eb660383722d7cc07b4bce40d9e51a13f/'/>
        </Section>
    </Page>
  )
}

export default Charts;
