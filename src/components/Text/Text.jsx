import styles from './styles.module.css';


const Text = (props) => {
  return (
    <p style={{
      color: props.color ? props.color : 'white',
      fontWeight: props.weight ? props.weight : 'initial',
      fontSize: (props.size ? props.size : 'initial') + 'ch',
      fontFamily: props.family ? props.family: 'Roboto',
    }}children={props.children}/>
  )
}

export default Text;
