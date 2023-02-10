import Link from "next/link"
import styles from 'styles/currentCategory.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTag } from "@fortawesome/free-solid-svg-icons"
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons"

const CurrentCategory = ({categories,tagInfo}) => {
    // const catAndTag = categories.concat(tagInfo)
    // console.log(catAndTag)

    return (
        <div className={styles.flexContainer}>
                {categories.map(({name,slug}) => (
                    <span key={slug}>
                        <FontAwesomeIcon icon={faFolderOpen} />
                        <Link href={`category/${slug}`}>
                            {name}
                        </Link>
                    </span>
                ))} 

                {tagInfo.map(({ name,slug }) => (
                    <span key={slug}>
                        <FontAwesomeIcon icon={faTag} />
                        <Link href={`tag/${slug}`}>
                            {name}
                        </Link>
                    </span>
                ))}
        </div>
    )
}

export default CurrentCategory

