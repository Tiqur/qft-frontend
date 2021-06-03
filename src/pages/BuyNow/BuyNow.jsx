import styles from './styles.module.css';
import Layout from '../../components/Layout/Layout.jsx';
import Page from '../../components/Page/Page.jsx';
import Section from '../../components/Section/Section.jsx';
import Text from '../../components/Text/Text.jsx';


const BuyNow = (props) => {
  return (
    <Page>
        { /* Charts */ }
        <Section class={styles.aboutContainer}>
          <iframe scrolling='no'title="Buy Queef Token ( QFT ) on Pancakeswap" src="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xee40498eb660383722d7cc07b4bce40d9e51a13f#code" width="90%" height="900"/>
        </Section>
    </Page>
  )
}

export default BuyNow;
