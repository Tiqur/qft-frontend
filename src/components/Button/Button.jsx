import styles from './styles.module.css';
import Text from '../../components/Text/Text.jsx';


const Button = (props) => {
  return (
    <div className={styles.container} style={{
      background: props.background ? props.background : 'blue',
      padding: props.padding ? props.padding : '5px',
      borderRadius: '32px'
    }}>
    <Text color={props.color ? props.color : 'white'}>{props.text}</Text>
    </div>
  )
}

export default Button;
