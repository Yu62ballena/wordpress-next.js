import SidebarTitle from "components/sidebarTItle"
import Link from "next/link"
import styles from 'styles/categoryList.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"

const CategoryList = ({allCats}) => {
  return (
    <div>
      <SidebarTitle 
        title="カテゴリ一覧"
      />
      <ul className={styles.list}>
        {allCats.map(({name,slug})=> (
          <li key={slug}>
            <FontAwesomeIcon 
              icon={faCaretRight} 
              className={styles.icon} 
            />
            <Link href={`category/${slug}`}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

// mapで展開して出力されたのは次のような感じ
// <span>
//   <a href="/blog/category/evernote">Evernote</a>
// </span>


export default CategoryList