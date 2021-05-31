import styles from './styles.module.css';
import Page from '../../components/Page/Page.jsx';
import PoofGif from '../../assets/poof.gif';
import Section from '../../components/Section/Section.jsx';

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
