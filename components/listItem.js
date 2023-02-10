import Link from "next/link"

const ListItem = ({linkName, url}) => {
  return (
    <li>
      <Link href={url}>
        <p>{linkName}</p>
      </Link>
    </li>
  )
}

export default ListItem