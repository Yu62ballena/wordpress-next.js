import Container from "components/layout/container"
import Meta from "components/meta"
import Hero from "components/hero"
import styles from 'styles/contactPage.module.css'
import { useRef, useState } from "react";

const Contact = () => {
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const messageRef = useRef(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({...formValues, [name]: value})
  } 

  const initialValues = {name: "", email: "", message: ""}
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  // const [inputValue, setInputValue] = useState()
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // バリデーションチェック
    const validate = (values) => {
      const errors = {}
      const regex = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/

      if(!values.name){
        errors.name = "ユーザー名を入力してください"
      }
      if(!values.email){
        errors.email = "メールアドレスを入力してください"
      } else if (!regex.test(values.email)) {
        errors.email = "正しいメールアドレスを入力してください"
      }
      if(!values.message){
        errors.message = "問い合わせ内容を入力してください"
      }

      return errors
    }

    setFormErrors(validate(formValues))
    setIsSubmit(true)

    let data = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      message: messageRef.current?.value,
    }

    // nameRef.current.setAttribute("value", "")

      await fetch("api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        if(res.status === 200) console.log("メール送信成功")
      })
      
  }

  return (
    <Container>
      <Meta />
        <Hero 
          title="Contact"
          subtitle="お問い合わせはこちらから"
        />
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="name">
            お名前
          </label><br />
          <input 
            type="text" 
            id="name" 
            name="name"
            ref={nameRef}
            onChange={(e) => handleChange(e)}
            // value={inputValue}
            placeholder="お名前"
          />
          <p className={styles.errorMsg}>{formErrors.name}</p>
        </div>
        
        <div>
          <label htmlFor="email">
            メールアドレス
          </label><br />              
          <input 
            id="email" 
            name="email"
            ref={emailRef}
            onChange={(e) => handleChange(e)}
            // value={inputValue}
            placeholder="メールアドレス"
          />
          <p className={styles.errorMsg}>{formErrors.email}</p>
        </div>
        
        <div>
          <label htmlFor="message">
            メッセージ
          </label>
          <textarea 
            type="message" 
            id="message"
            name="message" 
            ref={messageRef}
            onChange={(e) => handleChange(e)}
            // value={inputValue}
            placeholder="問い合わせ内容"
          />
          <p className={styles.errorMsg}>{formErrors.message}</p>
        </div>
        <button type="submit">
          送信
        </button>
        {Object.keys(formErrors).length === 0 && isSubmit && (
          <div className={styles.msgOK}>
          <p>メッセージは送信されました。</p>
          <p>お問い合わせありがとうございます。</p>
          </div>
        )}
      </form>
    </Container>
  )
}
export default Contact