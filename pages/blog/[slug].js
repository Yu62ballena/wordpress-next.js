// react / next / plugin ---------
import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder'
import { useEffect } from 'react'


// lib ---------------
import { getPostBySlug, getAllSlugs, getAllCategories, getAllPostsByCategory } from 'lib/api' 
import { extractText } from 'lib/extract-text'
import { eyecatchLocal } from 'lib/constants'
import { PrevNextPost } from 'lib/prev-next-post'

// レイアウト ---------------
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'
import Container from 'components/layout/container'

// パーツ ---------------
import Meta from 'components/meta'
import ConvertBody from 'components/convert-body'
import PostHeader from 'components/postHeader'
import PostBody from 'components/postBody'
import Pagination from 'components/pagination'
import Recommend from 'components/recommend'
import Author from 'components/parts/author'
// import TableOfContents from 'components/tableOfContents'
import CategoryList from 'components/categoryList'
// import PostCategories from 'components/post-categories'
// import CurrentCategory from 'components/currentCategory'
// import CategoryAndTags from 'components/categoryAndTags'
// import Author from 'components/author'

// css ---------------
// import styles from 'styles/slug.module.css'


const Post = ({
    title,
    publish,
    content,
    eyecatch,
    categories,
    description,
    prevPost,
    nextPost,
    authorName,
    authorDesc,
    authorAvatar,
    tagInfo,
    allCats,
    // slug,
    // catTitle,
    // catSlug,
    // catEyecatch,
}) => {

    console.log(publish)
    // console.dir(author, {depth: null})
    
    // console.log(catTitle)
    // console.log(categories)
    
    // console.log(allCats)
    // { name: '撮影機材', id: 'camera_equipments', slug: 'camera_equipments' },
    // { name: '書評', id: 'bookreview', slug: 'bookreview' },
    // { name: '気ままに思うことを話す', id: 'ithink', slug: 'ithink' },
    // { name: '読書', id: 'reading', slug: 'reading' },
    // { name: '雑談', id: 'free_talk', slug: 'free_talk' }

    // const [isActiveScroll, setIsActiveScroll] = useState(false)
    // const toggleButton = () => {
    //     setIsActiveScroll((prev) => !prev)
    // }


    return (
        <Container>
            <Meta 
                pageTitle={title}
                pageDesc={description}
                pageImg={eyecatch.url}
                pageImgW={eyecatch.width}
                pageImgH={eyecatch.height}
            />

            <article>
                
                <PostHeader 
                    title={title}
                    publish={publish}
                    categories={categories}
                    displayed
                    tagInfo={tagInfo}
                />
                <figure>
                    <Image
                        key={eyecatch.url}
                        src={eyecatch.url}
                        alt=""
                        width={eyecatch.width}
                        height={eyecatch.height}
                        layout="responsive"
                        sizes="(min-width: 1152px) 1152px, 100vw"
                        priority
                        placeholder="blur"
                        blurDataURL={eyecatch.blurDataURL}
                    />
                </figure>
                <TwoColumn>
                    <TwoColumnMain>
                        <PostBody>
                            <ConvertBody contentHTML={content} />
                        </PostBody>
                        {/* <Recommend /> */}
                    </TwoColumnMain>

                    <TwoColumnSidebar>
                        <Author 
                            authorName={authorName}
                            authorDesc={authorDesc}
                            authorAvatar={authorAvatar}
                        />
                        {/* <TableOfContents content={content} /> */}
                        <CategoryList 
                            allCats={allCats}
                        />
                    </TwoColumnSidebar>
                </TwoColumn>
                <Pagination 
                    prevText={prevPost.title}
                    prevUrl={prevPost.slug}
                    nextText={nextPost.title}
                    nextUrl={nextPost.slug}
                />
                <Recommend 
                    title={title}
                    eyecatch={eyecatch}
                    publish={publish}
                />
                {/* <button onClick={toggleButton}>setActiveScroll</button>
                <p className={isActiveScroll ? styles.open : styles.close}>こんにちは</p> */}
            </article>
        </Container>
    )
}

export async function getStaticPaths() {
    const allSlugs = await getAllSlugs()

    // console.log(allSlugs)
    return {
        paths: allSlugs.map(({ slug }) => `/blog/${slug}`),
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const slug = context.params.slug
    const post = await getPostBySlug(slug)

    // console.log(post.categories)

    const description = extractText(post.content)
    const eyecatch = post.eyecatch ?? eyecatchLocal
    const { base64 } = await getPlaiceholder(eyecatch.url)
    eyecatch.blurDataURL = base64
    const allSlugs = await getAllSlugs()
    const allCats = await getAllCategories()
    const aaaa = post.categories

    const postsByCat = aaaa.map(({name,slug}) => (
        <span key={slug}>
                {name}
        </span>
    ))

    // console.log(postsByCat.children)

    // const postsByCat = await getAllPostsByCategory(post.categories.slug)

    // { name: '情報管理', id: 'organizinginfo', slug: 'organizinginfo' },
    // { name: '手帳グッズ', id: 'goods', slug: 'goods' },
    // { name: '手帳術', id: 'notebook', slug: 'notebook' },
    // { name: '撮影機材', id: 'camera_equipments', slug: 'camera_equipments' },
    // { name: '書評', id: 'bookreview', slug: 'bookreview' },
    // { name: '気ままに思うことを話す', id: 'ithink', slug: 'ithink' },


    const [prevPost, nextPost] = PrevNextPost(allSlugs, slug)


    return {
        props: {
            title: post.title,
            publish: post.publishDate,
            content: post.content,
            eyecatch: eyecatch,
            categories: post.categories,
            description: description,
            prevPost: prevPost,
            nextPost: nextPost,
            authorName: post.authorName,
            authorDesc: post.authorDesc,
            authorAvatar: post.authorAvatar,
            tagInfo: post.tags,
            allCats: allCats,
            slug: slug,
            // catTitle: postsByCat.title,
            // catSlug: postsByCat.slug,
            // catEyecatch: postsByCat.eyecatch,
        },
    }
}

export default Post