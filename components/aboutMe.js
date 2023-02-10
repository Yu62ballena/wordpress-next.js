import TopTitle from "components/topTitle"
// import Image from "next/image"
import styles from 'styles/aboutMe.module.css'
// import Eyecatch from "./eyecatch"
import Button from "components/button"

const AboutMe = () => {
  return (
    <div >
      <TopTitle title="About this site" />
      <div className={styles.relative}>
        <div className={styles.absoluteBox}>
          <div className={styles.descriptions}>
            <p>boxの中身</p>
            <Button description="詳しく見る" url="/about" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default AboutMe