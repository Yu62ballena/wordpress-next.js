import { getAllTags, getAllPostsByTag } from "lib/api";
import Container from 'components/layout/container'
import PostHeader from 'components/postHeader'
import Posts from 'components/posts'
import { getPlaiceholder } from "plaiceholder"
import { eyecatchLocal } from "lib/constants";
import Meta from 'components/meta'

const Tag = ({name,posts}) => {
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
    const allTags = await getAllTags()

    return {
        paths: allTags.map(({ slug }) => `/blog/tag/${slug}`),
        fallback: false,
    }
}


export async function getStaticProps(context) {
    const tagSlug = context.params.slug
    const allTags = await getAllTags()
    const tag = allTags.find(({ slug }) => slug === tagSlug)
    const posts = await getAllPostsByTag(tag.id)

    for (const post of posts) {
        if(!post.hasOwnProperty('eyecatch')) {
            post.eyecatch = eyecatchLocal
        }
        const { base64 } = await getPlaiceholder(post.eyecatch.url)
        post.eyecatch.blurDataURL = base64
    }

    return {
        props: {
            name: tag.name,
            posts: posts,
        },
    }
}




export default Tag