import parse from 'html-react-parser'
import Image from 'next/image'
import styles from 'styles/ConvertBody.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'
import { motion } from "framer-motion"

const ConvertBody = ({ contentHTML }) => {
    // console.log(contentHTML)

    const contentReact = parse(contentHTML, {
        replace: (node) => {
            if(node.name === 'img') {
                const {src, alt, width, height } = node.attribs
                console.log(node)
                return (
                    <motion.div
                        variants={{
                            offscreen: {
                            y: 100,
                            opacity: 0,
                            },
                            onscreen: {
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 1,
                                ease: [0, 0.95, 0.98, 1],
                            },
                            },
                        }}
            
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.2}}
                    >
                        <Image 
                            layout="responsive"
                            src={src}
                            width={width}
                            height={height}
                            alt={alt}
                            sizes="(min-width: 768px) 768px, 100vw"
                            unoptimized
                        />
                    </motion.div>
                )
            }

            if(node.name === 'p') {
                // if(typeof document === 'undefined'){
                    console.log(node.attribs)
                    // const h2Tags = document.getElementsByTagName('h2')
                    // console.log(h2Tags[0])
                // }
                


                return(
                    <div>
                        <h2>
                            <FontAwesomeIcon icon={faFolderOpen} className={styles.icon} />
                            
                        </h2>
                    </div>
                )
            }
        },
        
    })
    //  {console.log(contentReact)}
    return (
        <>
            
            {contentReact}
        </>
    )
}

export default ConvertBody


// contentHTMLの中身
// 記事本文の

{/* <p>こんにちは。 </p>
<p>ゆうです。</p>
<p> </p>
<p>先日のEaseUS Softwareという会社さんからレビュー依頼をいただき</p>
<p>Data Recovery Wizardというデータ復旧のアプリの記事を書きました。</p>
<p> </p>
<p>今回は同じくEaseUS Softwareさんからの依頼で</p>
<p><strong><span class="sc_marker">EaseUS RecExperts というPCの画面録画するためのアプリ</span></strong>の</p>
<p>レビュー依頼をいただきました。</p>
<p> </p>
<p>この記事で書くのはそのMacバージョンである</p>
<p><a href="https://jp.easeus.com/screen-recorder/rec-experts-mac.html" target="_blank" rel="noopener">EaseUS RecExperts for Mac</a>を使ってみた感想を</p>
<p>ここで書いていきたいと思います。</p>
<p> </p>
<p><a href="https://jp.easeus.com/screen-recording-tips/top-15-game-recoder-soft.html" target="_blank" rel="noopener">画面を録画するアプリ</a>はかなりたくさんの種類があったりするのですが、</p>
<p>その中でも<strong><span class="sc_marker">EaseUS RecExpertsは機能が豊富でありつつも</span></strong></p>
<p><strong><span class="sc_marker">シンプルで使いやすいと感じました。</span></strong></p>
<p> </p>
<p>特にいいと思った機能は次の2点です。</p>
<div class="sc_frame_wrap  orange">
<div class="sc_frame ">
<div class="sc_frame_text">
<div class="sc_designlist li fa_angle  orange">
<ul>
<li>画面録画しながら、自分の声も収録できる</li>
<li>録画データをGIFで出力できる</li>
</ul>
</div>
</div>
</div>
</div>
<p>こういった点も踏まえつつ、</p>
<p>EaseUS RecExpertsというアプリがどんなアプリなのか</p>
<p>ご紹介していきたいと思います。</p>
<p> </p>
<div id="toc_container" class="no_bullets"><p class="toc_title">この記事の内容</p><ul class="toc_list"><li><a href="#EaseUS_RecExperts"><span class="toc_number toc_depth_1">1</span> EaseUS RecExpertsはどんなアプリ？</a></li><li><a href="#EaseUS_RecExperts-2"><span class="toc_number toc_depth_1">2</span> EaseUS RecExpertsの使い方</a></li><li><a href="#EaseUS_RecExperts-3"><span class="toc_number toc_depth_1">3</span> EaseUS RecExpertsの設定方法</a></li><li><a href="#i"><span class="toc_number toc_depth_1">4</span> ブロガーが画面操作の簡単な説明動画を作るのによい</a></li><li><a href="#EaseUS_RecExperts_for_Mac"><span class="toc_number toc_depth_1">5</span> EaseUS RecExperts for Macのまとめ</a></li></ul></div>
<div class="clearfix diver_widget_adarea hid"><div class="diver_widget_adlabel">スポンサーリンク</div><div class="diver_ad">
                      <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-2755189178377663" data-ad-slot="1844928001" data-ad-format="horizontal"></ins>
                      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div></div><h2><span id="EaseUS_RecExperts">EaseUS RecExpertsはどんなアプリ？</span></h2>
<p><strong><span class="sc_marker">EaseUS RecExperts for Macは作業をしている<a href="https://jp.easeus.com/screen-recording-tips/mac-screen-recorder.html" target="_blank" rel="noopener">Macの画面を録画</a>することができるアプリです。</span></strong></p>
<p><strong><span class="sc_marker">同時にPCにマイクがついていれば録音することも可能です。</span></strong></p>
<p>実はけっこう多機能で、次のようなことができたりします。</p>
<p><img class="alignnone size-full wp-image-3182" src="https://yu-and-you.com/wp-content/uploads/2022/04/d5c044eaf5e3fd5aeb2c47f03d130c15.gif" alt="" width="1184" height="892" /></p>
<p>このGIF動画もEaseUS RecExpertsを使って</p>
<p>EaseUS SoftwareのHPから拝借したものです。</p>
<p> </p>
<p>面白い機能だなと思ったのは</p>
<p>「スケジュール作成」と「自動停止＆自動分割」。</p>
<p> </p>
<p>スケジュール作成は毎週何曜日の何時から何時までのように</p>
<p>前もって時間の登録を入れておくと</p>
<p>その時間に自動で画面のキャプチャを行ってくれるという機能。</p>
<p> </p>
<p>自動停止＆自動分割というのは</p>
<p>何分録画したらそこで録画をストップするとか、</p>
<p>録画した動画ファイルの大きさが◯MBを超えたら録画をストップするとか</p>
<p>そういうことを設定できる機能です。</p>
<p> </p>
<p>このアプリを使ってできることというのは</p>
<p>いくつかパターンがあるかと思いますが、</p>
<p>わかりやすいところでいうと</p>
<p>次のような使い方ができるかと思います。</p>
<div class="sc_frame_wrap  orange">
<div class="sc_frame ">
<div class="sc_frame_text">
<div class="sc_designlist li fa_angle  orange">
<ul>
<li><a href="https://jp.easeus.com/screen-recording-tips/zoom-meeting-recording-software.html" target="_blank" rel="noopener">ZOOMの画面をまるまる録画</a>しておく</li>
<li>画面の動画に合わせてナレーションを入れていく</li>
<li>ブログなどに挿入する短いGIF動画を作る</li>
</ul>
</div>
</div>
</div>
</div>
<p>ZOOMはそもそも録画の機能を持っていますが、</p>
<p>自分の画面にだけ表示させている資料を合わせて録画こともできるので</p>
<p>場合によっては便利かなと感じました。</p>
<p> </p>
<div class="clearfix diver_widget_adarea hid"><div class="diver_widget_adlabel">スポンサーリンク</div><div class="diver_ad">
                      <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-2755189178377663" data-ad-slot="1844928001" data-ad-format="horizontal"></ins>
                      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div></div><h2><span id="EaseUS_RecExperts-2">EaseUS RecExpertsの使い方</span></h2>
<p><strong><span class="sc_marker">使い方は非常に簡単で</span></strong></p>
<p><strong><span class="sc_marker">アプリを立ち上げたら「REC」を押すだけ。</span></strong></p>
<p><a title="View '操作画面' on Flickr.com" href="https://www.flickr.com/photos/190548260@N08/52026357188"><img title="操作画面" src="https://live.staticflickr.com/65535/52026357188_3e041c9661_b.jpg" alt="操作画面" width="1024" height="278" border="0" /></a></p>
<p>それだけで今表示されている画面の録画がスタートします。</p>
<p> </p>
<p><strong><span class="sc_marker">「REC」を押す前にフルスクリーンを押せば画面全体が、</span></strong></p>
<p><strong><span class="sc_marker">エリアを押すと画面のどの部分をキャプチャするのか</span></strong></p>
<p><strong><span class="sc_marker">選択できるようになります。</span></strong></p>
<p> </p>
<p>また自動分割・自動停止・タスクスケジューラーなどで</p>
<p>前項でお話したファイルサイズや録画時間による録画の停止や、</p>
<p>日時を指定して録画を行うスケジューリングができたりします。</p>
<p><a title="View '録画ファイルの自動分割' on Flickr.com" href="https://www.flickr.com/photos/190548260@N08/52025119957"><img title="録画ファイルの自動分割" src="https://live.staticflickr.com/65535/52025119957_03e527a7bb_b.jpg" alt="録画ファイルの自動分割" width="992" height="334" border="0" /></a></p>
<p> </p>
<p>若干バージョンは古いようですが、</p>
<p>使い方はこちらの動画が非常にわかりやすく参考になります。</p>
<p><div class="youtube-container"><iframe title="パソコン画面の録画は無料と有料どっちが良いの？EaseUS RecExpertsの機能を試してみる。" width="850" height="478" src="https://www.youtube.com/embed/7pwiXwLtkKU?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></p>
<p> </p>
<div class="clearfix diver_widget_adarea hid"><div class="diver_widget_adlabel">スポンサーリンク</div><div class="diver_ad">
                      <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-2755189178377663" data-ad-slot="1844928001" data-ad-format="horizontal"></ins>
                      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div></div><h2><span id="EaseUS_RecExperts-3">EaseUS RecExpertsの設定方法</span></h2>
<p>単純に録画するだけなら、</p>
<p>前項で紹介したように「REC」ボタンを押すだけなんですが、</p>
<p>実はけっこういろいろ設定できるんです。</p>
<p> </p>
<p>「REC」ボタンの左側に「設定」というボタンがありますよね。</p>
<p>ここで様々な設定をしていくことができます。</p>
<p> </p>
<p>例えば、録画の画質などもここの設定から行います。</p>
<p><a title="View '保存ファイル設定' on Flickr.com" href="https://www.flickr.com/photos/190548260@N08/52026407834"><img title="保存ファイル設定" src="https://live.staticflickr.com/65535/52026407834_99d9c548cc_b.jpg" alt="保存ファイル設定" width="1024" height="525" border="0" /></a></p>
<p><strong><span class="sc_marker">出力ファイルのフォーマットも複数種類が用意されていて、</span></strong></p>
<p><strong><span class="sc_marker">目的にあったファイルを一発で出力することが可能です。</span></strong></p>
<p>フォーマットは次のようなものが選べます。</p>
<p><a title="View '保存ファイルフォーマット' on Flickr.com" href="https://www.flickr.com/photos/190548260@N08/52026407929"><img title="保存ファイルフォーマット" src="https://live.staticflickr.com/65535/52026407929_a16175edc8_b.jpg" alt="保存ファイルフォーマット" width="1024" height="524" border="0" /></a></p>
<p>ちなみに<strong><span class="sc_marker">画質は圧縮してもそこまで画質が落ちることはありませんでした。</span></strong></p>
<p>圧縮しても十分使えるなと感じました。</p>
<p> </p>
<p>フレームレートは1〜60まで選ぶことができます。</p>
<p> </p>
<p>ナレーションの挿入も可能だと言いましたが、</p>
<p>音声もフォーマットや音質を選択することができます。</p>
<p> </p>
<p>他にもマウスのカーソルは録画画面に含めるのか、</p>
<p>「REC」ボタンを押してからすぐに録画に入るのか、</p>
<p>5秒待つのかなど、</p>
<p>かなり細かい設定もこの画面から行うことが可能です。</p>
<p><a title="View '環境設定画面' on Flickr.com" href="https://www.flickr.com/photos/190548260@N08/52026407899"><img title="環境設定画面" src="https://live.staticflickr.com/65535/52026407899_aeec3f743c_b.jpg" alt="環境設定画面" width="1024" height="545" border="0" /></a></p>
<p> </p>
<h2><span id="i">ブロガーが画面操作の簡単な説明動画を作るのによい</span></h2>
<p>このアプリを見て最初に思ったのは、</p>
<p><strong><span class="sc_marker">ブログでアプリの使い方を説明するときに</span></strong></p>
<p><strong><span class="sc_marker">短くて容量的に軽い動画を作るのによさそうだということでした。</span></strong></p>
<p> </p>
<p>普段は静止画と言葉のみで説明してきましたが、</p>
<p>中にはちょっとだけ動画にして説明できたら</p>
<p>もっとわかりやすくなるのになと思うことが過去にありました。</p>
<p> </p>
<p>でもそういう場合、ガッツリ動画をつくるというのは作業的に重い。</p>
<p>しかも容量的にもMP4はファイルサイズがでかい。</p>
<p>EaseUS RecExpertsでできるような</p>
<p>画面の一部録画をGIFで書き出すことができるというのは</p>
<p>すごくありがたい機能だと思いました。</p>
<p> </p>
<p>冒頭でEaseUS RecExpertsの主な機能を紹介した</p>
<p>GIF動画を載せましたが、</p>
<p>あれをMP4でも撮ったものがあります。</p>
<p>連続して載せてみるので、比べてみてもらいたいです。</p>
<p> </p>
<p>MP4</p>
<div style="width: 850px;" class="wp-video"><!--[if lt IE 9]><script>document.createElement('video');</script><![endif]-->
<video class="wp-video-shortcode" id="video-3179-1" width="850" height="640" preload="metadata" controls="controls"><source type="video/mp4" src="https://yu-and-you.com/wp-content/uploads/2022/04/756a83e5bef26bf7e2ca01887a584122.mp4?_=1" /><a href="https://yu-and-you.com/wp-content/uploads/2022/04/756a83e5bef26bf7e2ca01887a584122.mp4">https://yu-and-you.com/wp-content/uploads/2022/04/756a83e5bef26bf7e2ca01887a584122.mp4</a></video></div>
<p> </p>
<p>GIF動画</p>
<p><img class="alignnone size-full wp-image-3182" src="https://yu-and-you.com/wp-content/uploads/2022/04/d5c044eaf5e3fd5aeb2c47f03d130c15.gif" alt="" width="1184" height="892" /></p>
<p>どうでしょう？</p>
<p>差がないわけではないと思いますが、</p>
<p>かといってGIF動画が荒く見えるでしょうか？</p>
<p>そんなことないですよね。</p>
<p> </p>
<p>そうなんです。</p>
<p><strong><span class="sc_marker">十分使える画質なんですよ。</span></strong></p>
<p> </p>
<p>そして、ファイルサイズもMP4だと10MBになるところ、</p>
<p>GIFだと2.5MBほどで済みます。</p>
<p> </p>
<p>サイトの運営をする身から言えば</p>
<p>ファイルサイズが小さくて済むのは</p>
<p>サーバーの容量的にも読み込み速度的にも</p>
<p>プラスしかないんですよね。</p>
<p> </p>
<p>将来的に購入して使ってもいいなと思えるアプリでした。</p>
<p> </p>
<h2><span id="EaseUS_RecExperts_for_Mac">EaseUS RecExperts for Macのまとめ</span></h2>
<p>今日はEaseUS Softwareの<a href="https://jp.easeus.com/screen-recorder/rec-experts-mac.html" target="_blank" rel="noopener">EaseUS RecExperts for Mac</a>の紹介をしました。</p>
<p><strong><span class="sc_marker">アプリを立ち上げたら1クリックですぐに</span></strong></p>
<p><strong><span class="sc_marker">画面の録画を始めることができるアプリでした。</span></strong></p>
<p> </p>
<p>簡単にアプリの特徴をまとめると次のようになります。</p>
<div class="sc_frame_wrap  orange">
<div class="sc_frame ">
<div class="sc_frame_text">
<div class="sc_designlist li fa_angle  orange">
<ul>
<li>画面中の片隅まで録画可能</li>
<li>すべてのサウンドも録音可能</li>
<li>カメラでの録画も可能</li>
<li>GIFに録画する</li>
<li>スケジュール作成</li>
<li>自動停止＆自動分割</li>
</ul>
</div>
</div>
</div>
</div>
<p>シンプルに扱うことができるのに</p>
<p>多機能でいろいろなことができるようになっています。</p>
<p> </p>
<p>出力できるファイルの種類もベーシックなものは押さえてあり、</p>
<p>どんな場面であっても困ることはまずないかと思われます。</p>
<p> </p>
<p><strong><span class="sc_marker">個人的には軽い画質で短いちょっとした説明動画を作れる</span></strong></p>
<p><strong><span class="sc_marker">GIFの書き出しと部分的に録画する機能が気に入りました。</span></strong></p>
<p> </p>
<p>でも、人によってはナレーションを入れてみるなど</p>
<p>様々な使い方ができるのではないかと思います。</p>
<p> </p>
<p>ぜひ、使ってみていただければと思います。</p>
<p> </p>
<p>それでは。</p>
<p>今日よりほんのちょっとステキな明日があなたに訪れますように。</p>
 */}
