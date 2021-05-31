import styles from './styles.module.css';
import Layout from '../../components/Layout/Layout.jsx';
import Page from '../../components/Page/Page.jsx';
import Text from '../../components/Text/Text.jsx';
import Section from '../../components/Section/Section.jsx';


const Poof = (props) => {
  return (
    <Page>
        <Section class={styles.aboutContainer}>
          <Text margin='0 0 0.5em 0'size='4'>WhitePaper:</Text>
          <Text color='grey'>
    QFT - a ridiculous & friendly meme token, designed to create an artist-promoter-fan network and functionality. Open to everyone (color, orientation, gender, belief, culture). Ultimately, it will become the driving force (asset) behind SOS. 
Artists (musicians, performing artists, painters, sculptors, photographers, videographers, graphics designers, etc) who qualify (eligibility factors to be further established) can receive a certain amount of tokens, with which they can use to access events, services, deals, promotion, distribution, possibly even booking/touring support. A lot of the artist - promoter networking will happen within the Queef app/web ecosystem. 
Music/art publishers, bioggers, booking agents, galleries, record companies would receive QFT to provide services to QFT holders. 
Fundraisers, NFT Art auctions, etc, can be purchased and held in OFT. Bands can also agree to sell their art, merchandise, tickets, etc in QFT as well as FIAT. 
Encourage fans to tip artists in QFT during their performances, or as they are streaming their music on different platforms (Spotify, YouTube, etc). If not, we could develop a plug-in. When a user is playing a song in Spotify, the plugin would get the name of the artist and the song name, then allow the user to send a tip directly to, artist's wallet with a tap of a button, maybe accompanied with a message. Fans could get backstage passes and vip access during shows, special content, etc. 
Fans could reap rewards when holding QFT, tipping and purchasing items/art, and possibly win VIP/backstage access tickets to shows, festivals, coupons for associated retailers, or simply - OFT. 
Artists (musicians, performing artists, painters, sculptors, photographers, videographers, graphics designers, etc) who qualify (eligibility factors to be further established) can receive a certain amount of tokens, with which they can use to access events, services, deals, promotion, distribution, possibly even booking/touring support. A lot of the artist - promoter networking will happen within the Queef app/web ecosystem. 
Music/art publishers, bloggers, booking agents, galleries, record companies would receive QFT to provide services to QFT holders. 
Fundraisers, NFT Art auctions, etc, can be purchased and held in QFT. Bands can also agree to sell their art, merchandise, tickets, etc in QFT as well as FIAT. 
Encourage fans to tip artists in QFT during their performances, or as they are streaming their music on different platforms (Spotify, YouTube, etc). If not, we could develop a plug-in. When a user is playing a song in Spotify, the plugin would get the name of the artist and the song name, then allow the user to send a tip directly to artists wallet with a tap of a button, maybe accompanied with a message. Fans could get backstage passes and vip access during shows, special content, etc. 
Fans could reap rewards when holding QFT, tipping and purchasing items/art, and possibly win VIP/backstage access tickets to shows, festivals, coupons for associated retailers, or simply - QFT. 
          </Text>
        </Section>
    </Page>
  )
}

export default Poof;
