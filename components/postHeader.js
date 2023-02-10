import styles from 'styles/postHeader.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import ConvertDate from 'components/convert-date'
import Link from 'next/link'
import CurrentCategory from 'components/currentCategory'

const PostHeader = ({ title, publish = '', categories, displayed = false, tagInfo}) => {
    return (
        <div className={styles.stack}>            
            <div className={styles.flexContainer}>

                {/* パンくずリスト */}
                { displayed &&
                <div className={styles.breadcrumbs}>

                    <p>TOP <span className={styles.cursor}>{'>'}</span> 
                    {categories.map(({ name, slug }) => (
                        <span key={slug}>
                        <Link href={`category/${slug}`}>
                            {name}
                        </Link>
                    </span>
                    ))}  

                    <span className={styles.cursor}>{'>'}</span> {title}</p>
                </div>
                }
                {/* パンくずリストここまで */}
                

                <div className={styles.flexContainerInside}>
                    {publish &&
                    <div className={styles.publish}>
                    <FontAwesomeIcon icon={faClock} size="lg" color="var(--gray-25)" />
                    <ConvertDate dateISO={publish} />
                    </div>
                    }
                </div>
                
            </div>
            
            <h1 className={styles.title}>{title}</h1>
            {displayed &&
                <CurrentCategory 
                    categories={categories}
                    tagInfo={tagInfo}
                />
            }

            
        </div>
    )
}

export default PostHeader