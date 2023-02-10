import styles from "styles/sidebarTitle.module.css"

const SidebarTitle = ({title}) => {
    return (
        <div className={styles.title}>
            <span>{title}</span>
        </div>
    )
}

export default SidebarTitle