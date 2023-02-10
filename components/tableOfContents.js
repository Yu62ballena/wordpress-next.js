import styles from 'styles/tableOfContents.module.css'
import SidebarTitle from 'components/sidebarTItle'
import tocbot from 'tocbot'
import { useEffect } from 'react'
// import ConvertBody from 'components/convert-body'

const TableOfContents = ({content}) => {
    useEffect(() => {
        tocbot.init({
            tocSelector: '.toc',
            contentSelector: '.body',
            headingSelector: 'h2, h3',
        })

        return () => tocbot.destroy()
    }, [])

    
    // return (
    //     <>
    //         <SidebarTitle title="目次" />
    //         <div className={styles.contentBox}>
    //             <p>ここに目次が来る予定</p>
    //         </div>
    //     </>
    return (
        <div>
          <div className="body">
          </div>
          <nav className="toc" />
        </div>
      )

    // )
}

export default TableOfContents







// import { Cheerio } from "cheerio";

// const TableOfContents = ({data}) => {
//     const headings = $('h2, h3').toArray()
//     const toc = headings.map((data) => {
//         return {
//         //@ts-ignore'
//         text: String(data.children[0].data),
//         id: data.attribs.id,
//         name: data.name,
//     }
//     })
// }

// export default TableOfContents

// import * as cheerio from 'cheerio';

// const RenderToc = (contentHTML) => {
//   const $ = cheerio.load(contentHTML);
//   const headings = $('h2, h3').toArray();
// //   const toc = headings.map((data) => ({
// //     text: data.children[0].data,
// //     id: data.attribs.id
// //   }));
// console.log(headings)
//   return headings;
// };

// export default RenderToc


// import { useEffect } from 'react'
// import tocbot from 'tocbot'

// const TableOfContents = () => {
//     useEffect(() => {
//         tocbot.init({
//             tocSelector: '.toc',
//             contentSelector: '.post',
//             headingSelector: 'h2, h3'
//         })
//     }, [])

//     return () => tocbot.destroy()
// }

// export default TableOfContents


// import { useEffect } from 'react'
// import tocbot from 'tocbot'

// export const Toc = () => {
//   useEffect(() => {
//     tocbot.init({
//       tocSelector: '.toc',
//       contentSelector: '.post',
//       headingSelector: 'h2, h3',
//     })

//     return () => tocbot.destroy()
//   }, [])

//   return (
//     <>
//       <div className="toc" />
//       <style jsx global>{`
//         .toc {

//           border-radius: 0.25rem;
//           padding: 1rem;
//           font-size: 0.875rem;
//         }

//         .toc-list .toc-list {
//           padding-left: 1rem;
//           padding-top: 0.5rem;
//         }

//         .toc-list-item {
//           padding-bottom: 0.5rem;
//         }

//         .toc-list-item:last-child {
//           padding-bottom: 0;
//         }

//         .toc-link {

//         }

//         .is-active-link {
//           font-weight: 700;
//         }
//       `}</style>
//     </>
//   )
// }