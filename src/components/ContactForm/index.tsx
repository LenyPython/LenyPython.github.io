import styled from 'styled-components'
import ThemeButton from '../../styled/ThemeButton'
import { ReactComponent as CloseBtn } from '../../svg/close.svg'
import { ReactComponent as Email } from '../../svg/get_email.svg'
import {useState} from 'react'
import {useAppSelector} from '../../app/hooks'
import {getContactForm} from '../../slices/ComponentSlice'
import {setContactForm} from '../../slices/ComponentSlice'
import {useDispatch} from 'react-redux'

const Container = styled.div`
  position: fixed;
  top: 150px;
  left: 50%;
  width: 95%;
  max-width: 600px;
  background: var(--main-containers-color);
  border-radius: 15px;
  box-shadow: var(--main-shadow);
  transform: translateX(-50%);
  transition: all .3s;
  padding: 50px 2em;
  & > svg {
    width: 24px;
    height: 24px;
    color: var(--main-font-color);
    cursor: pointer;
    z-index: 1;
  }
  &.closed {
    transform: translate(-50%, -150%);
  }
  @media(max-width: 600px) {
    top: 100px;
  }
`
const Form = styled.form`
  input, textarea {
    resize: none;
    margin: 1em;
    border: none;
    font-size: 1rem;
    background: var(--main-background-color);
    color: var(--main-font-color);
    padding: .4em .3em;
    &::placeholder {
      color: var(--main-font-color);
      opacity: .8;
    }
    &:active, &:focus {
      outline: none;
      border-bottom: 2px solid var(--main-font-color);
    }
  }
  textarea {
    width: 90%;
    min-height:150px;
  }
  @media(max-width: 600px){
    input, textarea { margin: .5em; }
    textarea { min-height: 120px; }
  }

`

const ContactForm = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [isCopied, setIsCopied] = useState(false)
  const isOpen = useAppSelector(getContactForm)

  const sx = {
        position: 'absolute' as 'absolute',
        top: '25px',
        right: '25px',
        }

  const updateName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setName(value)
  }
  const updateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
  }
  const updateMsg = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setMsg(value)
  }
  const copyEmail = () => {
    navigator.clipboard.writeText('lenartowicz.elekonpro@gmail.com')
    setIsCopied(true)
    setTimeout(()=>setIsCopied(false),5000)
  }
  const closeForm = () => dispatch(setContactForm(false))

  return <>
    <Container className={isOpen?'':'closed'}>
    <h2>Email: <Email onClick={copyEmail} /> {isCopied&&' COPIED!'}</h2>
    <h2>or</h2>
    <h2>contact me:</h2>
    I'll answer as soon as I can.
    <CloseBtn onClick={closeForm} style={sx} />
    <Form  action="https://formsubmit.co/lenartowicz.elekonpro@gmail.com" method="POST">
    <input type="hidden" name="_next" value="https://lenypython.github.io/" />
    <input type="hidden" name="_subject" value="Kontakt z portfolio" />
    <input type='text' name='name'value={name} onChange={updateName} placeholder='Name...'/>
    <input type='email' name='email' value={email} onChange={updateEmail} placeholder='Email...' required />
    <input type="hidden" name="_autoresponse" value="Thak You for your email! I'll answer as soon as I can! Have a great day!" />
    <input type="hidden" name="_template" value="table" />
    <textarea value={msg} name='message' onChange={updateMsg} placeholder='Messsage...' required />
    <ThemeButton style={{color:'var(--main-font-color)'}}>Send</ThemeButton>
     </Form>
  </Container>
  </>
}

export default ContactForm
