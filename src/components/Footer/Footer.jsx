import { ReactComponent as DiscordLogo } from '../../assets/discord.svg';
import { ReactComponent as RedditLogo } from '../../assets/reddit.svg';
import { ReactComponent as TwitterLogo } from '../../assets/twitter.svg';
import { ReactComponent as InstaLogo } from '../../assets/instagram.svg';
import { ReactComponent as TelegramLogo } from '../../assets/telegram.svg';
import { Box } from '@material-ui/core';
import styles from './styles.module.css';
import Text from '../Text/Text.jsx';
import IconButton from '@material-ui/core/IconButton';


const Icon = (props) => {
  return (
    <IconButton className={props.iconButton}>
      <a target='_blank' href={props.href}>
        {<props.icon fill='#6C6C89' className={styles.logo}/>}
      </a>
    </IconButton>
  )
}


const Footer = (props) => {
  return (
    <div className={styles.container}>
      <Box display='flex'>
        <Icon href='https://discord.gg/ns3NqzK2qy' icon={DiscordLogo}/>
        <Icon href='https://www.reddit.com/r/Queef_Token/' icon={RedditLogo}/>
        <Icon href='https://twitter.com/Queef_Token' icon={TwitterLogo}/>
        <Icon href='https://instagram.com/queeftoken?r=nametag' icon={InstaLogo}/>
        <Icon href='https://t.me/joinchat/arOJyaFFu3VjZjUx' icon={TelegramLogo}/>
      </Box>
      <Box display='flex' mt='1em' flexDirection='column'>
        <Text color='grey'>Terms of Service</Text>
        <Text color='grey'>Privacy Policy</Text>
      </Box>
    </div>
  )
}

export default Footer;
