import Hero from "/components/hero"
import Container from 'components/layout/container'
import PostBody from 'components/postBody'
import Contact from 'components/contact'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'
import Image from 'next/image'
import eyecatch from 'images/about.jpg'
import Meta from 'components/meta'
import Accordion from "components/processing/accordion"



const About = () => {

    return (
        <>
            <Container>
                <Meta 
                    pageTitle="アバウト" 
                    pageDesc="About development activities"
                    pageImg={eyecatch.src}
                    pageImgW={eyecatch.width}
                    pageImgH={eyecatch.height}
                />

                <Hero 
                    title="About me"
                    subtitle="about this site"
                />

                <figure>
                    <Image 
                        src={eyecatch}
                        alt=""
                        layout="responsive"
                        sizes="(min-width: 1152px) 1152px, 100vw"
                        priority
                        placeholder="blur"
                    />
                </figure>
                <TwoColumn>

                    <TwoColumnMain>
                        <PostBody>
                            <p>
                                Cubeが得意とする分野はモノづくりです。3次元から次元の造形、プログラミングやデザインなど、さまざまな技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けています。
                            </p>
                            <h2>モノ作りで目指していること</h2>
                            <p>
                                単純に形にするだけでなく、作る過程や、なぜそのようにしたのかを大事にしながらモノづくりをしています。毎回課題解決テーマをもって「モノ」と向き合い制作をし、フィードバックしてもらうことで自分の中にあるモヤモヤを言葉にして「問い」への答えを出しています。
                            </p>
                            <h3>新しいことへのチャレンジ</h3>
                            <p>
                                今までと違うものを作ることで愛着が湧いてきます。そこで興味を持ったことは小さなことでもいいから取り入れて、良いものを作れるようにしています。小さなヒントから新しいものを生み出すようなモノヅクリは、これからも続けていきたいです。
                            </p>

                            <h2>FAQ</h2>
                                <Accordion heading="プログラミングのポイントについて">
                                    <p>プログラミングのポイントは、作りたいものを作ることです。楽しいことから思いつき、目標とゴールを決め、そこに向かって様々な課題を設定していきながら、プログラムを作っていきます。</p>
                                </Accordion>
                                <Accordion heading="古代語の解読について">
                                    <p>古代語を解読するのに必要なのは、書かれた文字そのものだけです。古代の世界観や施工方法。それらを「読み取ってこそ古代の世界観が理解できてきます。</p>
                                </Accordion>
                                <Accordion heading="公開リポジトリの活用について">
                                    <p>公開リポジトリを活用すると、全席あのどこからでもアクセスし、開発者が関連するプロジェクトのタスクを利用することができます。</p>
                                </Accordion> 
                        </PostBody>
                    </TwoColumnMain>

                    <TwoColumnSidebar>
                        <Contact />
                    </TwoColumnSidebar>

                </TwoColumn>
                
                
            </Container>
        </>
    )
}

export default About