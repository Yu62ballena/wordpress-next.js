import styles from 'styles/button.module.css'
import Link from 'next/link'

const Button = ({description, url}) => { 
  return (
    <div className={styles.center}>
      <Link href={url}>
        <button className={styles.button} type="button">{description}</button>
      </Link>
    </div>
  )
}

export default Button