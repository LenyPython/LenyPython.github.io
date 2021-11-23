import styled from 'styled-components'
import Screener from './Screener'
import {useState} from 'react'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding; .3em;
  width: 250px;
  img {
    max-width: 249px;
    max-height: 300px;
    transition: .4s all;
    cursor: pointer;
  }
  button {
    margin: 0 .5em .5em;
    background: var(--main-background-color);
    color: var(--main-font-color);
    font-size: 1.4rem;
    border:none;
    cursor: pointer;
  }
`

interface Props {
  imgs: {
    path: string
    no: number
  }
}

const ImgDisplay: React.FC<Props> = ({ imgs:{ path, no } }) => {
  const [i, setI] = useState(1)
  const [isOpen, setIsOpen] = useState(false)


  const prevImg = () => i - 1 < 1? setI(no): setI(i - 1)
  const nextImg = () => no < i + 1? setI(1): setI(i + 1)

  return <Container>
    <div>
    <button onClick={prevImg}>{'<<<<'}</button>
    <button onClick={nextImg}>{'>>>>'}</button>
    </div>
    <img src={path + i + '.png'} onClick={()=>setIsOpen(true)}alt='projImg' />
    <Screener path={path} no={no} open={isOpen} setIsOpen={setIsOpen}/>
    </Container>
}

export default ImgDisplay
