import styles from 'styles/categoryAndTags.module.css'
import SidebarTitle from 'components/sidebarTItle'
import CurrentCategory from 'components/currentCategory'


const CategoryAndTags = ({categories,tagInfo}) => {

    return (
        <>
            <SidebarTitle title="カテゴリー / タグ" />
            <div className={styles.catAndTags}>
                <CurrentCategory 
                    categories={categories}
                    tagInfo={tagInfo}
                />
                
            </div>
        </>

    )
}

export default CategoryAndTags