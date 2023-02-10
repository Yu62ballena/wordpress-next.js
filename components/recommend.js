import styles from 'styles/recommend.module.css' 
import Image from 'next/image'
import ConvertDate from 'components/convert-date'
// import Posts from 'components/posts'

const Recommend = ({title, eyecatch, publish, posts}) => {
    
    
    return (
        <>
            <p>{title}</p>
            {/* <figure>
                <Image 
                
                /> 
            </figure> */}
            {/* <Posts posts={posts}/> */}
            <div>
            <ConvertDate 
                dateISO={publish}
            />
            </div>
        </>
    )

}



export default Recommend