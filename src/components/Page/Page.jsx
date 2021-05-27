import NavBar from '../../components/NavBar/NavBar.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Clouds from '../../components/Clouds/Clouds.jsx';
import { Box } from '@material-ui/core';

const Page = (props) => {
  return (
    <Box display='flex' flexDirection='column'>
      <NavBar/>
      {props.children}
      <Footer/>
      <Clouds/>
    </Box>
  )
}

export default Page;
