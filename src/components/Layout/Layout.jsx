import styles from './styles.module.css';


const Layout = (props) => {
  return (
    <div className={styles.container}>
      <div style={{width: window.innerWidth - 50, height: window.innerHeight}}>
        {props.children}
      </div>
    </div>
  )
}

export default Layout;
