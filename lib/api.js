// // wordpress-apiを見ながら自分で打ったやつ
// // import {API_URL} from '.env.local'
const API_URL = process.env.WORDPRESS_API_URL

async function fetchAPI(query = '', variables = {}) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  }).then((response) => response.json())

  if (response.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return response.data
}

export async function getPostBySlug(slug) {
  const variables = {
    slug,
  }

  const query = `
  query getPostBySlug ($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      slug
      title(format: RENDERED)
      date
      content(format: RENDERED)
      featuredImage {
        node {
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
      tags {
        nodes {
          name
          slug
        }
      }
      author {
        node {
          avatar {
            url
            width
            height
          }
          description
          firstName
        }
      }
    }
  }
        `
  try {
    const response = await fetchAPI(query, variables)

    const content = {
      title: response.post.title,
      slug: response.post.slug,
      publishDate: response.post.date,
      content: response.post.content,
      categories: response.post.categories.nodes,
      authorName: response.post.author.node.firstName,
      authorDesc: response.post.author.node.description,
      authorAvatar: response.post.author.node.avatar,
      tags: response.post.tags.nodes,
    }

    if (response.post.featuredImage) {
      content.eyecatch = {
        url: response.post.featuredImage.node.sourceUrl,
        height: response.post.featuredImage.node.mediaDetails.height,
        width: response.post.featuredImage.node.mediaDetails.width,
      }
    }
    // console.log(content)
    return content
  } catch (err) {
    console.log('~~ getPostBySlug ~~')
    console.log(err)
  }
}

export async function getAllSlugs(limit = 300) {
  const variables = {
    limit,
  }

  const query = `
          query getAllSlugs($limit: Int!) {
            posts(first: $limit) {
              nodes {
                title
                slug
              }
            }
          }
        `
// nicknameはwordpress側の設定項目の場所がよくわからず未取得。
// 代わりにfirstName, lastNameは取得できた。

  try {
    const response = await fetchAPI(query, variables)
    const contents = response.posts.nodes

    return contents
  } catch (err) {
    console.log('~~ getAllSlugs ~~')
    console.log(err)
  }
}

export async function getAllPosts(limit = 300) {
  const variables = {
    limit,
  }

  // const query = `
  //         query getAllSlugs($limit: Int!) {
  //           posts(first: $limit) {
  //             nodes {
  //               title
  //               slug
  //               featuredImage {
  //                 node {
  //                   sourceUrl
  //                   mediaDetails {
  //                     height
  //                     width
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       `

  const query = `
    query getAllPosts($limit: Int!) {
      posts(first: $limit) {
        nodes {
          title
          slug
          featuredImage {
            node {
              sourceUrl
              mediaDetails {
                height
                width
              }
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
          date
        }
      }
    }
  `

  try {
    const response = await fetchAPI(query, variables)

    // console.dir(response.posts.nodes.categories, { depth: null })

    const contents = response.posts.nodes.map((node) => {
      const content = {
        title: node.title,
        slug: node.slug,
        catInfo: node.categories,
        date: node.date,
      }

      if (node.featuredImage) {
        content.eyecatch = {
          url: node.featuredImage.node.sourceUrl,
          height: node.featuredImage.node.mediaDetails.height,
          width: node.featuredImage.node.mediaDetails.width,
        }
      }
      return content
    })
    return contents
  } catch (err) {
    console.log('~~ getAllPosts ~~')
    console.log(err)
  }
}


export async function getAllCategories(limit = 300) {
  const variables = {
    limit,
  }

  const query = `
          query getAllCategories($limit: Int!) {
            categories(first: $limit) {
              nodes {
                name
                slug
              }
            }
          }
        `

  try {
    const response = await fetchAPI(query, variables)

    // console.dir(response, { depth: null })

    const contents = response.categories.nodes.map((node) => {
      const content = {
        name: node.name,
        id: node.slug,
        slug: node.slug,
      }
      return content
      
    })
    // console.log(contents)
    return contents
  } catch (err) {
    console.log('~~ getAllCategories ~~')
    console.log(err)
  }
}

export async function getAllPostsByCategory(catID, limit = 100) {
  const variables = {
    id: catID,
    limit,
  }

  const query = `
          query getAllPostsByCategory($id: ID!, $limit: Int!) {
            category(id: $id, idType: SLUG) {
              posts(first: $limit) {
                nodes {
                  slug
                  title
                  featuredImage {
                    node {
                      sourceUrl
                      mediaDetails {
                        width
                        height
                      }
                    }
                  }
                }
              }
            }
          }
        `

  try {
    const response = await fetchAPI(query, variables)

    const contents = response.category.posts.nodes.map((node) => {
      const content = {
        title: node.title,
        slug: node.slug,
      }

      if (node.featuredImage) {
        content.eyecatch = {
          url: node.featuredImage.node.sourceUrl,
          height: node.featuredImage.node.mediaDetails.height,
          width: node.featuredImage.node.mediaDetails.width,
        }
      }

      return content
    })

    return contents
  } catch (err) {
    console.log('~~ getAllPostsByCategory ~~')
    console.log(err)
  }
}


export async function getAllTags(limit = 300) {
  const variables = {
    limit,
  }

  const query = `
          query getAllTags($limit: Int!) {
            tags(first: $limit) {
              nodes {
                name
                slug
              }
            }
          }
        `

  try {
    const response = await fetchAPI(query, variables)

    console.dir(response, {depth: null})

    const contents = response.tags.nodes.map((node) => {
      const content = {
        name: node.name,
        id: node.slug,
        slug: node.slug,
      }
      return content
    })
    return contents

  } catch (err) {
    console.log('~~ getAllTags ~~')
    console.log(err)
  }
}


// getAllpostsByTagsに改造中
export async function getAllPostsByTag(tagID, limit = 300) {
  const variables = {
    id: tagID,
    limit,
  }
  const query = `
          query getAllPostsByTag ($id: ID!, $limit: Int!){
            tag(id: $id, idType: SLUG) {
              posts(first: $limit){
                nodes {
                  slug
                  title
                  featuredImage {
                    node {
                      sourceUrl
                      mediaDetails {
                        height
                        width
                      }
                    }
                  }
                }
              }
            }
          }
        `

  try {
    const response = await fetchAPI(query, variables)

    const contents = response.tag.posts.nodes.map((node) => {
      const content = {
        title: node.title,
        slug: node.slug,
      }

      if (node.featuredImage) {
        content.eyecatch = {
          url: node.featuredImage.node.sourceUrl,
          height: node.featuredImage.node.mediaDetails.height,
          width: node.featuredImage.node.mediaDetails.width,
        }
      }

      return content
    })

    return contents
  } catch (err) {
    console.log('~~ getAllPostsByTag ~~')
    console.log(err)
  }
}

// --------------------------------------------


// // const API_URL = 'http://localhost:8888/graphql'



// //ひとまずAPIでまるっとデータを取る関数
// //というか、fetchするときの.thenとか.jsonとかをここで関数としてまとめている
// // 本来fetch(endpoint).then((response) => response.json)とかやらなきゃいけないんだけど、
// // それをfetchAPIという関数におさめ、この関数を呼び出すことで処理している
// async function fetchAPI(query = '', variables = {}) {  //variable ? → propsとしてvariableというデータを受け取っている
//     const response = await fetch(API_URL, {             //このファイルの中で使い回すだけだからexportがついてないと思われる
//         method: 'POST',
//         headers: {                                      //headerとbodyに分けて、それぞれのデータを読み込むのか？
//             'Content-type': 'application/json',         //というか、{}がheaderとbodyに別れてるからこういう書き方してるような気がする
//         },

//         body: JSON.stringify ({
//             query,
//             variables,
//         }),                                 // ここまでfetchの中身
//     }).then((response) => response.json())

    

//     if (response.errors) {
//         console.error(json.errors)  // console.errors ?
//         throw new Error('Failed to fetch API')   // throw と new Errorは使い方を確認
//     }
//     // console.log(response.data)

//     return response.data    // contentsではなくdata
// }


// // GetPostBySlug
// // 特定のslugを取得して、そのslugのtitleやらcontentやら
// // まとめて情報を取る役割

// export async function getPostBySlug(slug) {
//     const variables = {
//         slug,
//     }
//     // ひとまずvariablresを宣言する(propsでうけ受けたものを入れるのかもしんない）

//     const query = `
//     query getPostBySlug($slug: ID!) {
//         post(idType: SLUG, id: $slug) {
//           slug
//           title(format: RENDERED)
//           date
//           content(format: RENDERED)
//           featuredImage {
//             node {
//               sourceUrl
//               mediaDetails {
//                 height
//                 width
//               }
//             }
//           }
//           categories {
//             nodes {
//               name
//               slug
//             }
//           }
//         }
//       }
//     `

//     // const query = `
//     // query getPostBySlug($slug: ID!) {
//     //     post(idType: SLUG, id: $slug ) {
//     //       slug
//     //       title(format: RENDERED)
//     //       date
//     //       content(format: RENDERED)
//     //       featuredImage {
//     //         node {
//     //           sourceUrl
//     //           mediaDetails {
//     //             height
//     //             width
//     //           }
//     //         }
//     //       }
//     //       categories {
//     //         nodes {
//     //           name
//     //           slug
//     //         }
//     //       }
//     //     }

//     //   }
//     // `
    

//     try {
//         const response = await fetchAPI(query, variables)
//         // fetchAPI(query, variables)でfetchしたデータを取得する

//         // console.log(response)

//         const content = {
//             title: response.post.title,
//             slug: response.post.slug,
//             publishDate: response.post.date,
//             content: response.post.content,
//             categories: response.post.categories.nodes,
//             author: response.post.author.node.name
//         }

//         if (response.post.featuredImage) {
//             // 画像はveaturedImageがあるとしたらという条件文をつけておく
//             content.eyecatch = {
//                 url: response.post.featuredImage.node.sourceUrl,
//                 height: response.post.featuredImage.node.mediaDetails.height,
//                 width: response.post.featuredImage.node.mediaDetails.width,
//             }
//         }
//         return content
//     } catch (err) {
//         console.log('--getPostBySlug--')
//         console.log(err)
//     }
// }


// // getAllSlugs

// export async function getAllSlugs(limit = 100) {
//     const variables = {
//         limit,
//     }

//     const query = `
//         query getAllSlugs($limit : Int!) {
//             posts(first: $limit) {
//                 nodes {
//                     title
//                     slug
//                 }
//             }
//         }
//     `

//     try {
//         const response = await fetchAPI(query, variables)
//         const contents = response.posts.nodes

//         return contents
//     } catch (err) {
//         console.log('--getAllSlugs--')
//         console.log(err)
//     }
// }


// // getAllPosts

// export async function getAllPosts(limit = 100) {
//     const variables = {
//         limit,
//     }

//     const query = `
//         query getAllSlugs($limit: Int!) {
//             posts(first: $limit) {
//                 nodes {
//                     title
//                     slug
//                     featuredImage {
//                         node {              
//                             sourceUrl
//                             mediaDetails {
//                                 height
//                                 width
//                             }
//                         }
                        
//                     }
//                 }
//             }
//         }
//     `

//     try {
//         const response = await fetchAPI(query, variables)

//         const contents = response.posts.nodes.map((node) => {
//             const content = {
//                 title: node.title,  // nodesではない？
//                 slug: node.slug,
//             }

//             if(node.featuredImage) {
//                 content.eyecatch = {
//                     url: node.featuredImage.node.sourceUrl,
//                     height: node.featuredImage.node.mediaDetails.height,
//                     width: node.featuredImage.node.mediaDetails.width,
//                 }
//             }
//             return content
//         })
//         return contents
//     } catch (err) {
//         console.log('--getAllPosts--')
//         console.log(err)
//     }
// }


// // getAllCategories
// export async function getAllCategories(limit = 100) {
//     const variables = {
//         limit,
//     }

//     const query = `
//         query getAllCategories($limit: Int!) {
//             categories(first: $limit) {
//                 nodes {
//                     name
//                     slug
//                 }
//             }
//         }
//     `

//     try {
//         const response = await fetchAPI(query, variables) 
//         const contents  = response.categories.nodes.map((node) => {
//             const content = {
//                 name: node.name,
//                 id: node.slug,
//                 slug: node.slug,
//             }
//             return content
//         })
//         return contents
//     } catch (err) {
//         console.log('--getAllCategories--')
//         console.log(err)
//     }
// }


// // getAllPostsByCategory
// export async function getAllPostsByCategory(catID, limit = 100) {
//     const variables = {
//         id: catID,
//         limit,
//     }

//     const query = `
//         query getAllPostsByCategory($id :ID!, $limit: Int!) {
//             category(id:$id, idType: SLUG) {
//                 posts(first: $limit) {
//                     nodes {
//                         slug
//                         title
//                         featuredImage {
//                             node {
//                                 sourceUrl
//                                 mediaDetails {
//                                     width
//                                     height
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     `

//     try {
//         const response = await fetchAPI(query, variables)
//         const contents = response.category.posts.nodes.map((node) => {
//             const content = {
//                 title: node.title,
//                 slug: node.slug,
//             }

//             if (node.featuredImage) {
//                 content.eyecatch = {
//                     url: node.featuredImage.node.sourceUrl,
//                     height: node.featuredImage.node.mediaDetails.height,
//                     width: node.featuredImage.node.mediaDetails.width,
//                 }
//             }
//             return content
//         })
//         return contents
//     } catch (err) {
//         console.log('--getAllPostsBuyCategory--')
//         console.log(err)
//     }
// }


// export async function getAuthorInfo() {
//     const authorInfo = await fetchAPI(`
//     query author {
//         user(id: "yu62ballena") {
//             avatar {
//             url
//             width
//             height
//             }
//         }
//     }
//     `)
// }



// // パンくずリストのデータ取得

// export async function getBreadcrumbs(slug) {
//     const variables = {
//         slug,
//     }
//     // console.log("slugの中身 : " + slug)

//     const query = `
//     query getBreadcrumbs($slug: ID!) {
//         post(idType: SLUG, id: $slug) {
//           categories {
//             nodes {
//               name
//               slug
//             }
//           }
//           title
//         }
//       }
//     `

//     try {
//         const response = await fetchAPI(query, variables)
//         // console.log("この次、post.categoriesの中身")
//         // console.dir(response.post.categories, {depth: null})

//         const content = {
//             categoryInfo: response.post.categories.nodes,
//             articleName: response.post.title,
//         }
        

//         return content

//     } catch (err) {
//         console.log('--getBreadcrumbs--')
//         console.log(err)
//     }
// }


// // async function で全体のAPIを取る関数を宣言
// //     ↓
// // export async function で必要なAPIを取得する関数を作る
// //     ↓
// //     関数の中身
// //     const variables = {
// //         ◯◯◯
// //     }
// //     でpropsの中身を書く

// //     const query = `
//             // query 関数名(variableで定義したものの型付けかなんかしてる？) {
//             //     posts(){
//             //         nodes{
//             //             titleslug
//             //         }
//             //     }
//             // }
// //         ◯◯◯    
// //     `
// //     で、取りたいAPIの情報を書く

// //     try {
// //         const response = await fetchAPI(query, variables)　すぐ上で宣言したvariablesとqueryを受け取る

// //     }