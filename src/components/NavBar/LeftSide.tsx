import { NavBtn } from '../../styled'
import {useAppDispatch} from '../../app/hooks'
import {setAlgoTab, setProjectsTab, setTechTab} from '../../slices/ComponentSlice'



const LeftSide = () => {
  const dispatch = useAppDispatch()
  const toggleProj = () => dispatch(setProjectsTab(''))
  const toggleTech = () => dispatch(setTechTab(''))
  const toggleAlgo = () => dispatch(setAlgoTab(''))

  return <div>
    <NavBtn onClick={toggleProj}>projects</NavBtn>
    <NavBtn onClick={toggleTech}>tech</NavBtn>
    <NavBtn onClick={toggleAlgo}>algo & ds</NavBtn>
    </div>
}

export default LeftSide
