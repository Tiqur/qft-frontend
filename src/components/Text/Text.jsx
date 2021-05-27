import styles from './styles.module.css';


const Text = (props) => {
  return (
    <p style={{
      color: props.color ? props.color : 'white',
      fontWeight: props.weight ? props.weight : 'initial',
      fontSize: (props.size ? props.size : 'initial') + 'ch',
      fontFamily: props.family ? props.family : 'Roboto',
      padding: props.padding ? props.padding : 'initial',
      margin: props.margin ? props.margin : 'initial'
    }}children={props.children}/>
  )
}

export default Text;
