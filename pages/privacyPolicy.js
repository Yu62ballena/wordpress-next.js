import Container from "components/layout/container"
import Meta from "components/meta"
import styles from 'styles/postBody.module.css'

const PrivacyPolicy = () => {
  return (
    <Container>
      <Meta />

      {/* サイト名　＋URL を追記 */}
      <p>本プライバシーポリシーは、「○○○○」（アドレス）（以下、「当サイト」とします)の各種サービス（当サイトによる情報提供、各種お問合せの受付等）において、当サイトの訪問者（以下、「訪問者」とします。）の個人情報もしくはそれに準ずる情報を取り扱う際に、当サイトが遵守する方針を示したものです。</p>
      
      <h2>1．基本方針</h2>
      <p>当サイトは、個人情報の重要性を認識し、個人情報を保護することが社会的責務であると考え、個人情報に関する法令を遵守し、当サイトで取扱う個人情報の取得、利用、管理を適正に行います。当サイトで収集した情報は、利用目的の範囲内で適切に取り扱います。</p>
      <p> </p>

      <h2>2．適用範囲</h2>
      <p>本プライバシーポリシーは、当サイトにおいてのみ適用されます。</p>
      <p> </p>

      <h2>3．個人情報の取得と利用目的</h2>
      <p>当サイトで取得する訪問者の個人情報と利用目的、保存期間等は下記の通りです。</p>
      <p> </p>
      <h3>3-1．コメントを残した際に個人情報を取得します</h3>
      <p>当サイトでは、訪問者が当サイトにコメントを残した際に、以下の個人情報を取得します。</p>
      <p>コメントフォームに表示されている名前（HN）<br />コメントフォームに表示されているメールアドレス<br />コメントフォームに表示されているコメント内容<br />コメントフォームに表示されているサイト名（任意項目）<br />IPアドレス<br />ブラウザユーザーエージェント文字列<br />これにより次回コメントを残す際に、「名前」や「メールアドレス」が自動的に表示されるため、それらを再入力する手間を省くことができます。</p>
      <p>メールアドレスから作成される匿名化された (「ハッシュ」とも呼ばれる) 文字列は、訪問者が<a href="https://ja.gravatar.com/" target="_blank" rel="noreferrer">Gravatar</a>サービスを使用中かどうか確認するため同サービスに提供されることがあります。同サービスのプライバシーポリシーを確認する場合は、<a href="https://automattic.com/privacy/" target="_blank" rel="noreferrer">こちら</a>をクリックしてください。</p>
      <p> </p>
      <h4>3-1-1．利用目的について</h4>
      <p>荒し対策やスパム検出に役立てるためと、訪問者の利便性のためです。また、当サイト内で「訪問者からこのようなコメントがありました」と紹介させていただく場合もあります。</p>
      <p>コメントが当サイトの管理人である「ゆう」（以下、「管理人」とします。）に承認されると、プロフィール画像がコメントとともに一般公開されます。</p>
      <p> </p>
      <h4>3-1-2．保存期間について</h4>
      <p>当サイトに残されたコメントは、コメントとそのメタデータを1年間保存します。</p>
      <p>訪問者は当サイトにコメントを残す際に、お名前、メールアドレス、お持ちのサイト情報（任意）を ブラウザに保存するかどうかを選択できます。</p>
      <p> </p>
      <h4>3-1-3．当サイトがコメントに対してできることについて</h4>
      <p>訪問者が当サイトにコメントを残したことがある場合は、当サイトの管理人は、当サイトが保存する訪問者についての個人情報（提供したすべての情報を含む）をエクスポートファイルとして訪問者が「受け取りたい」というリクエストに応えることが出来ます。その際、訪問者のメールアドレスに確認のメールが送られます。</p>
      <p>また、訪問者から訪問者本人の個人情報を「消去してほしい」というリクエストにも応えることが出来ます。これには、管理や法律、セキュリティ目的のために保持する義務がある情報は含まれません。また消去する際も、訪問者のメールアドレスに確認のメールが送られます。</p>
      <h3>3-2．お問い合せされた個人情報を取得します</h3>
      <p>当サイトではお問い合わせフォーム（あなたのサイトのお問い合わせフォームのURLを貼る）を設けています。</p>
      <p>訪問者がそのお問い合わせフォームから問い合わせをされた際に入力された、以下の個人情報を取得します。</p>
      <p>お問い合わせフォームに入力された名前（HN）<br />お問い合わせフォームに入力されたメールアドレス<br />お問い合わせフォームに入力されたお問合せ内容</p>
      <p> </p>
      <h4>3-2-1．利用目的について</h4>
      <p>お問い合わせ対応をするためと、訪問者の管理のためです。訪問者からのお問い合わせ情報を保存しておくことによって、同じ訪問者が別のお問い合わせをした際に、過去の問い合わせ内容を踏まえた対応をすることが出来、より的確な対応をすることが出来ます。</p>
      <p>また、当サイト内で「このようなお問合せがありました」と紹介させていただく場合もあります。</p>
      <p> </p>
      <h4>3-2-2．保存期間について</h4>
      <p>お問い合わせフォームに入力された個人情報は、1年間保存します。</p>
      <p> </p>
      <h4>3-2-3．個人情報取得の同意について</h4>
      <p>当サイトでは、お問い合わせフォームからお問い合わせをする前に、当プライバシーポリシーをご一読いただくよう案内しています。</p>
      <p>お問い合わせをされた時点で、その訪問者は当プライバシーポリシーに同意されたとみなします。</p>
      <p> </p>
      <h3>3-3．Cookieによる個人情報の取得</h3>
      <p>当サイトは、訪問者のコンピュータにCookieを送信することがあります。</p>
      <p>Cookie（クッキー）とは、ウェブサイトを利用したときに、ブラウザとサーバーとの間で送受信した利用履歴や入力内容などを、訪問者のコンピュータにファイルとして保存しておく仕組みです。</p>
      <p> </p>
      <h4>3-3-1．利用目的について</h4>
      <p>訪問者の当サイト閲覧時の利便性を高めるためです。</p>
      <p>たとえば、次回同じページにアクセスするとCookieの情報を使って、ページの運営者は訪問者ごとに表示を変えることができます。</p>
      <p>たとえばあるサイトを利用していて、初回はログインパスワードを入力する画面が表示されたけど、2回目以降はログイン画面は表示されずにアクセスできた、という経験ありませんか？それはCookieによるものです。</p>
      <p>訪問者がブラウザの設定でCookieの送受信を許可している場合、ウェブサイトは、訪問者のブラウザからCookieキーを取得できます。</p>
      <p>なお、訪問者のブラウザはプライバシー保護のため、そのウェブサイトのサーバーが送受信したCookieのみを送信します。</p>
      <p> </p>
      <h4>3-3-2．保存期間について</h4>
      <p>当サイトに残されたコメントの Cookie は、1年間保存されます。</p>
      <p> </p>
      <h4>3-3-3．第三者によるCookie情報の取得について</h4>
      <p>当サイトでは、グーグル株式会社やヤフー株式会社などをはじめとする第三者から配信される広告が掲載される場合があり、これに関連して当該第三者が訪問者のCookie情報等を取得して、利用している場合があります。</p>
      <p>当該第三者によって取得されたCookie情報等は、当該第三者のプライバシーポリシーに従って取り扱われます。</p>
      <p> </p>
      <h4>3-3-4．第三者へのCooke情報等の広告配信の利用停止について</h4>
      <p>訪問者は、当該第三者のウェブサイト内に設けられたオプトアウト（個人情報を第三者に提供することを停止すること）ページにアクセスして、当該第三者によるCookie情報等の広告配信への利用を停止することができます。</p>
      <p> </p>
      <h4>3-3-5．Cookie情報の送受信の許可・拒否について</h4>
      <p>訪問者は、Cookieの送受信に関する設定を「すべてのCookieを許可する」、「すべてのCookieを拒否する」、「Cookieを受信したらユーザーに通知する」などから選択できます。設定方法は、ブラウザにより異なります。Cookieに関する設定方法は、お使いのブラウザの「ヘルプ」メニューでご確認ください。</p>
      <p>すべてのCookieを拒否する設定を選択されますと、認証が必要なサービスを受けられなくなる等、インターネット上の各種サービスの利用上、制約を受ける場合がありますのでご注意ください。</p>
      <p> </p>
      <h2>4．個人情報の管理</h2>
      <p>当サイトは、訪問者からご提供いただいた情報の管理について、以下を徹底します。</p>
      <p> </p>
      <h3>4-1. 情報の正確性の確保</h3>
      <p>訪問者からご提供いただいた情報については、常に正確かつ最新の情報となるよう努めます。</p>
      <p> </p>
      <h3>4-2. 安全管理措置</h3>
      <p>当サイトは、個人情報の漏えいや滅失又は棄損を防止するために、適切なセキリュティ対策を実施して個人情報を保護します。</p>
      <p> </p>
      <h3>4-3. 個人情報の廃棄</h3>
      <p>個人情報が不要となった場合には、すみやかに廃棄します。</p>
      <p> </p>
      <h3>4-4. 個人情報の開示、訂正、追加、削除、利用停止</h3>
      <p>訪問者ご本人からの個人情報の開示、訂正、追加、削除、利用停止のご希望の場合には、ご本人であることを確認させていただいた上、速やかに対応させていただきます。</p>
      <p>上記を希望される場合は、以下のメールアドレスまでお問い合わせください。</p>
      <p>メールアドレス：yu62ballena@gmail.com</p>
      <p> </p>
      <h2>5．個人情報の第三者への提供について</h2>
      <p>当サイトは、訪問者からご提供いただいた個人情報を、訪問者本人の同意を得ることなく第三者に提供することはありません。また、今後第三者提供を行うことになった場合には、提供する情報と提供目的などを提示し、訪問者から同意を得た場合のみ第三者提供を行います。</p>
      <p> </p>
      <h2>6．未成年の個人情報について</h2>
      <p>未成年者が当サイトにコメントをしたり、お問い合わせフォームから問い合わせをされたりする場合は必ず親権者の同意を得るものとし、コメントやお問い合わせをされた時点で、当プライバシーポリシーに対して親権者の同意があるものとみなします。</p>
      <p> </p>
      <h2>7．お問い合わせ先</h2>
      <p>当サイト、又は個人情報の取扱いに関しては、下記のメールアドレスにてお問い合わせください。</p>
      <p>当サイト運営者：ゆう</p>
      <p>メールアドレス：yu62ballena@gmail.com</p>
      <p> </p>
      <h2>8．アクセス解析ツールについて</h2>
      <p>当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。</p>
      <p>このGoogleアナリティクスはアクセス情報の収集のためにCookieを使用しています。このアクセス情報は匿名で収集されており、個人を特定するものではありません。</p>
      <p>GoogleアナリティクスのCookieは、26ヶ月間保持されます。この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。</p>
      <p>Googleアナリティクスの利用規約に関して確認したい場合は、<a href="https://www.google.com/analytics/terms/jp.html" target="_blank" rel="noreferrer">ここをクリック</a>してください。また、「ユーザーが Google パートナーのサイトやアプリを使用する際の Google によるデータ使用」に関して確認したい場合は、<a href="https://policies.google.com/technologies/partner-sites?hl=ja" target="_blank" rel="noreferrer">ここをクリック</a>してください。</p>
      <p> </p>
      <h2>9．第三者配信の広告サービスについて</h2>
      <p><br />当サイトは、第三者配信の広告サービス「Google Adsense（グーグルアドセンス）」を利用しています。</p>
      <p>Googleなどの第三者広告配信事業者は、訪問者の興味に応じた広告を表示するために、Cookie（当サイトの訪問者が当サイトや他のサイトにアクセスした際の情報など）を使用することがあります。</p>
      <p>訪問者は、広告設定で訪問者に合わせた広告（以下、「パーソナライズド広告」とします。）を無効にすることが出来ます。その設定をする場合は、<a href="https://adssettings.google.com/authenticated" target="_blank" rel="noreferrer">こちらをクリック</a>してください。また、<a href="http://optout.aboutads.info/?c=2&amp;lang=EN" target="_blank" rel="noreferrer">www.aboutads.info</a>にアクセスすれば、パーソナライズド広告に使われる第三者配信事業者の Cookie を無効にできます。</p>
      <p>第三者配信による広告掲載を無効にしていない場合は、第三者配信事業者や広告ネットワークの配信する広告がサイトに掲載されることがあります。</p>
      <p>Googleによって広告の第三者配信が認められている広告配信事業者の詳細は、<a href="https://support.google.com/admanager/answer/94149" target="_blank" rel="noreferrer">ここをクリック</a>してください。</p>
      <p> </p>
      <h3>10．Amazonの広告配信について</h3>
      <p>当サイトは、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。</p>
      <p>第三者（Amazonや他の広告掲載者）がコンテンツおよび宣伝を提供し、訪問者から直接情報を収集し、訪問者のブラウザにCookieを設定したり、認識したりする場合があります。</p>
      <p> </p>
      <h3>11．プライバシーポリシーの変更について</h3>
      <p>当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本プライバシーポリシーの内容を適宜見直しその改善に努めます。修正された最新のプライバシーポリシーは常に本ページにて開示されます。</p>
      <p> </p>

      {/* 日付は公開日を設定 */}
      <p>令和4年12月28日　策定</p>
    </Container>
  )
}

export default PrivacyPolicy