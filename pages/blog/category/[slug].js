import { getAllCategories, getAllPostsByCategory } from "lib/api";
import Container from 'components/layout/container'
import PostHeader from 'components/postHeader'
import Posts from 'components/posts'
import { getPlaiceholder } from "plaiceholder"
import { eyecatchLocal } from "lib/constants";
import Meta from 'components/meta'

const Category = ({name,posts}) => {
    return (
        <Container>
            <Meta 
                pageTitle={name}
                pageDesc={`${name}に関する記事`}
            />

            <PostHeader title={name} subtitle="Blog Category" />
            <Posts posts={posts} />
        </Container>
    )
}

export async function getStaticPaths() {
    const allCats = await getAllCategories()

    // console.log(allCats)
    // { name: '情報管理', id: 'organizinginfo', slug: 'organizinginfo' },
    // { name: '手帳グッズ', id: 'goods', slug: 'goods' },
    // { name: '手帳術', id: 'notebook', slug: 'notebook' },
    // 以下、全カテゴリが取得できている

    return {
        paths: allCats.map(({ slug }) => `/blog/category/${slug}`),
        fallback: false,
    }
}


export async function getStaticProps(context) {
    const catSlug = context.params.slug

    const allCats = await getAllCategories()
    const cat = allCats.find(({ slug }) => slug === catSlug)

    const posts = await getAllPostsByCategory(cat.id)

    // const cat = "free_talk"
    // const guitarID = "evernote"
    // const posts = await getAllPostsByCategory(guitarID,4)
    // console.log(posts)


    for (const post of posts) {
        if(!post.hasOwnProperty('eyecatch')) {
            post.eyecatch = eyecatchLocal
        }
        const { base64 } = await getPlaiceholder(post.eyecatch.url)
        post.eyecatch.blurDataURL = base64
    }

    return {
        props: {
            // name: cat.name,
            posts: posts,
        },
    }
}




export default Category