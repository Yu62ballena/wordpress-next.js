// 本を見て作っている方
// gitに登録してみた

// import Hero from 'components/hero'
import Container from 'components/layout/container'
import Meta from 'components/meta'
import Posts from 'components/posts'
// import Pagination from 'components/pagination'
import { getAllPosts, getAllPostsByCategory } from 'lib/api'
import { eyecatchLocal } from 'lib/constants'
import { getPlaiceholder } from 'plaiceholder'
import Eyecatch from 'components/eyecatch'
import AboutMe from 'components/aboutMe'


export default function Home({posts, guitarCats, cameraCats}) {

  // console.log(posts)
  return (
    <Container>
      <Meta />

      <Eyecatch 
        pageTitle="React / Next.js × Wordpress"
        imageOn
      />
      {/* <Hero 
        title="CUBE"
        subtitle="アウトプットしていくサイト"
        imageOn
      /> */}
      
      <Posts 
        posts={posts} 
        title="新着記事"
        titleOn
        buttonOn
        description="他の記事も読む"
        url="blog"
      />
      <Posts 
        posts={guitarCats} 
        title="posts.jsでguitarCatsを表示"
        titleOn
        column3
        buttonOn
        description="もっと読む"
        url="blog/category/guitar"
      />
      <Posts 
        posts={cameraCats} 
        title="posts.jsでcameraCatsを表示"
        titleOn
        column3
        buttonOn
        description="もっと読む"
        url="blog/category/evernote"
      />

      <AboutMe />


      {/* <Pagination nextUrl="/" nextText="Read More Posts" /> */}

    </Container>
  )
}


export async function getStaticProps() {
  const posts = await getAllPosts(6)
  const howManyPosts = 3

  const guitarCats = await getAllPostsByCategory('guitar',howManyPosts)
  const cameraCats = await getAllPostsByCategory('camera_equipments',howManyPosts)

  // const guitarCats = await getAllPostsByCategory(guitarID,4)で
  // 取得した場合のguitarCatsの中身
  // {
  //   title: 'Yet low Light（イエローライト）のライブに参戦してきた！',
  //   slug: 'yetlowlightayers',
  //   eyecatch: {
  //     url: 'https://yu-and-you.com/wp-content/uploads/2019/09/a40327fe9733dbaad45bef92acfa055e.jpg',
  //     height: 640,
  //     width: 960
  //   }
  // },

  for (const post of posts) {
      if(!post.hasOwnProperty('eyecatch')) {
          post.eyecatch = eyecatchLocal
      }

      const { base64 } = await getPlaiceholder(post.eyecatch.url)
      post.eyecatch.blurDataURL = base64
  }

  for (const guitarCat of guitarCats) {
    if(!guitarCat.hasOwnProperty('eyecatch')) {
        guitarCat.eyecatch = eyecatchLocal
    }

    const { base64 } = await getPlaiceholder(guitarCat.eyecatch.url)
    guitarCat.eyecatch.blurDataURL = base64
}

for (const cameraCat of cameraCats) {
  if(!cameraCat.hasOwnProperty('eyecatch')) {
      cameraCat.eyecatch = eyecatchLocal
  }

  const { base64 } = await getPlaiceholder(cameraCat.eyecatch.url)
  cameraCat.eyecatch.blurDataURL = base64
}

  return {
      props: {
          posts: posts,
          guitarCats: guitarCats,
          cameraCats: cameraCats,
      },
  }
}