import { ReactComponent as DiscordLogo } from '../../assets/discord.svg';
import { ReactComponent as RedditLogo } from '../../assets/reddit.svg';
import { ReactComponent as TwitterLogo } from '../../assets/twitter.svg';
import { ReactComponent as InstaLogo } from '../../assets/instagram.svg';
import { ReactComponent as TelegramLogo } from '../../assets/telegram.svg';
import styles from './styles.module.css';
import Text from '../Text/Text.jsx';
import { Box } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';


const Icon = (props) => {
  return (
    <IconButton className={props.iconButton}>
      {<props.icon fill='#6C6C89' className={styles.logo}/>}
    </IconButton>
  )
}


const Footer = (props) => {
  return (
    <div className={styles.container}>
      <Box display='flex'>
        <Icon icon={DiscordLogo}/>
        <Icon icon={RedditLogo}/>
        <Icon icon={TwitterLogo}/>
        <Icon icon={InstaLogo}/>
        <Icon icon={TelegramLogo}/>
      </Box>
      <Box display='flex' mt='1em' flexDirection='column'>
        <Text color='grey'>Terms of Service</Text>
        <Text color='grey'>Privacy Policy</Text>
      </Box>
    </div>
  )
}

export default Footer;
