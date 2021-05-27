import NavBar from '../../components/NavBar/NavBar.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import styles from './styles.module.css';
import Layout from '../../components/Layout/Layout.jsx';


const Section = (props) => {
  return (
    <div className={props.class}>
      <Layout>
        {props.children}
      </Layout>
    </div>
  )
}

const HowToBuy = (props) => {
  return (
    <div className={styles.mainContaier}>
      <NavBar/>
        <Section className={styles.section}>
          <p>Test</p>
        </Section>
      <Footer/>
    </div>
  )
}

export default HowToBuy;
