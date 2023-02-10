import styles from 'styles/posts.module.css'
import Link from 'next/link'
import Image from 'next/image'
import TopTitle from 'components/topTitle'
import Button from 'components/button'
import ConvertDate from 'components/convert-date'


const Posts = ({
    posts, 
    title, 
    titleOn = false,
    column3 = false,
    buttonOn = false,
    description,
    url
}) => {
    // console.log(posts)
    return (
        <article>
            {titleOn && (
                <TopTitle title={title} />
            )}
            <div className={column3 ? styles.gridContainer3Cloumn : styles.gridContainer}>
                {posts.map(({title,slug,eyecatch,date}) => (
                    <div className={styles.post} key={slug}>
                        <Link href={`/blog/${slug}`}>
                            <figure className={styles.image}>
                                <Image 
                                    src={eyecatch.url}
                                    alt=""
                                    layout="fill"
                                    objectFit="cover"
                                    placeholder="blur"
                                    sizes="(min-width: 1152px) 576px, 50vw"
                                    blurDataURL={eyecatch.blurDataURL}
                                />
                            </figure>
                            <h2>{title}</h2>
                        </Link>
                    </div>
                ))}
            </div>

            {buttonOn &&(
                    <Button 
                        description={description}
                        url={url}
                    />
                )}
        </article>
    )
}

export default Posts