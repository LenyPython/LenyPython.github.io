import {useState} from 'react'
import styled from 'styled-components'
import { ReactComponent as CloseBtn } from '../../svg/close.svg'


const Screen = styled.div`
  display: none;
  &.open {
    display: flex;
    position: fixed;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height 80%;
    background: var(--main-containers-color);
    border-radius: 15px;
    flex-direction: column;
    align-items: center;
    padding: 2em;
  }

`
interface Props {
  path: string
  no: number
  open: boolean
  setIsOpen: (arg: boolean)=>void
}

const Screener: React.FC<Props> = ({ path, no, open, setIsOpen }) => {
  const [i, setI] = useState(1)

  const imgs: JSX.Element[] = []
  for(let i = 1; i <= no; i++){
    imgs.push(<img src={path + i + '.png'} onClick={()=>setI(i)}alt='projImg' />)
  } 

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

  return  <Screen className={open?'open':''}>
    <img src={path + i + '.png'} alt='projImg' />
    <div>
      {imgs}
    </div>
    <CloseBtn onClick={()=>setIsOpen(false)} style={sx} />
    </Screen>
}

export default Screener
