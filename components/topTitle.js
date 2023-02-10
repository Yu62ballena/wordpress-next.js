import styles from 'styles/topTitle.module.css'

const TopTitle = ({title}) => {
  return (
    <h2 className={styles.title}><span>{title}</span></h2>
  )
}

export default TopTitle