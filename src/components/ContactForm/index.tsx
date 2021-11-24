import styled from 'styled-components'
import ThemeButton from '../../styled/ThemeButton'
import { ReactComponent as Email } from '../../svg/get_email.svg'
import { ReactComponent as CloseBtn } from '../../svg/close.svg'
import {useState} from 'react'

const FormContainer = styled.form`
  position: fixed;
  top: 50%;
  left: 0;
  width: 450px;
  height: 300px;
  background: var(--main-containers-color);
  border-radius: 15px;
  box-shadow: var(--main-shadow);
  transform: translate(-100%, 110%);
  transition: .3s all;
  padding: 1em;
  input {
    margin: 1em;
    border: none;
    background: var(--main-background-color);
    color: var(--main-font-color);
    padding: .4em .3em;
  }
  &.closed {
    width: 0;
    height: 0;
    transform: translateX(-100%);
    overflow: hidden;
  }

`

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [isOpen, setIsOpen] = useState(true)

  const sx = {
        position: 'absolute' as 'absolute',
        top: '25px',
        right: '25px',
        width: '24px',
        height: '24px',
        color:'var(--main-font-color)',
        cursor: 'pointer',
        zIndex: 1
        }

  const updateName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setName(value)
  }
  const updateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
  }
  const updateMsg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setMsg(value)
  }
  return <FormContainer onClick={()=>setIsOpen(true)}className={isOpen?'':'closed'}>
    <ThemeButton style={{color:'var(--main-font-color)'}}>
    copy
    <Email />
    </ThemeButton><br />
    <input type='text' value={name} onChange={updateName} placeholder='Name...'/>
    <input type='email' value={email} onChange={updateEmail} placeholder='Email...' required />
    <input type='text' value={msg} onChange={updateMsg} placeholder='Messsage...' required />
    <ThemeButton style={{color:'var(--main-font-color)'}}>Send</ThemeButton>
    <CloseBtn onClick={()=>setIsOpen(false)} style={sx} />
  </FormContainer>
}

export default ContactForm
