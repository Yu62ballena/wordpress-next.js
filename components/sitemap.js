import styles from 'styles/sitemap.module.css'
import ListItem from 'components/listItem'

const Sitemap = () => {
  return (
    <>
      <ul className={styles.list}>
        <ListItem 
          linkName="Top"
          url="/"
        />
        <ListItem 
          linkName="About me"
          url="about"
        />
        <ListItem 
          linkName="Blog"
          url="blog"
        />
        <ListItem 
          linkName="Contact"
          url="contact"
        />
        <ListItem 
          linkName="privacy policy"
          url="privacyPolicy"
        />
      </ul>
    </>
  )
}

export default Sitemap