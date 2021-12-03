import styled from 'styled-components'
import { ReactComponent as LeftArrow } from '../../svg/leftArrow.svg'
import { ReactComponent as RightArrow } from '../../svg/rightArrow.svg'

const Arrows = styled.div`
  position: absolute;
  left: 50%;
  display: flex;
  justify-content: space-between;
  width: 300px;
  height: 30px;
  & > div > svg:nth-child(even) { opacity: .4; }
  & > div > svg:nth-child(odd) { opacity: .7; }
  svg { 
    width: 35px;
    height: 35px;
    fill: var(--main-font-color);
  }
  animation: strech .5s infinite alternate;
  @keyframes strech{
    from {
      transform: translateX(-50%) scaleX(60%);
    }
    to{
      transform: translateX(-50%) scaleX(120%);
    }
  }
  `
const Pointer = () => {
    return <Arrows>
      <div>
        <LeftArrow />
        <LeftArrow />
        <LeftArrow />
      </div>
      <div>
        <RightArrow />
        <RightArrow />
        <RightArrow />
      </div>
    </Arrows>
  }

  export default Pointer
