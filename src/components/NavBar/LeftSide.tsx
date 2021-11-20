import { NavBtn } from '../../styled'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {setAlgoTab, setProjectsTab, setTechTab} from '../../slices/ComponentSlice'
import { getPageContent } from '../../slices/ComponentSlice'


const LeftSide = () => {
  const dispatch = useAppDispatch()
  const { ProjectsTab, TechTab, AlgoTab } = useAppSelector(getPageContent)
  const toggleProj = () => dispatch(setProjectsTab(''))
  const toggleTech = () => dispatch(setTechTab(''))
  const toggleAlgo = () => dispatch(setAlgoTab(''))

  return <div>
    <NavBtn onClick={toggleProj} className={ProjectsTab}>projects</NavBtn>
    <NavBtn onClick={toggleTech} className={TechTab}>tech</NavBtn>
    <NavBtn onClick={toggleAlgo} className={AlgoTab}>algo & ds</NavBtn>
    </div>
}

export default LeftSide
