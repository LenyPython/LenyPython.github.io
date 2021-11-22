import styled from 'styled-components'
import ImgDisplay from '../ImgDisplay'
import {ReactComponent as GitHub} from '../../svg/github.svg'
import { ProjectDataInterface } from '../../types/Interfaces'

const Card = styled.div`
  display: flex;
  background: var(--main-background-color);
  justify-content: flex-start;
  height: 300px;
  padding: 2em;
  margin-bottom: .5em;
  border-radius: 15px;
  border: 2px solid var(--main-font-color);
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: block;
    height: 100px;
    width: 5px;
  }
  & > div{
    margin: .5em;
    text-align: justify;
    display: flex;
    flex-direction: column;
  }
`

const ProjectCard: React.FC<ProjectDataInterface> = ({
  description, title, tech, images, code, live }) => {
  return (
    <Card>
      <ImgDisplay imgs={images} />
      <div>
        CODE: 
        <a href={code} target="_blank" rel="noreferrer">
          <GitHub width='30px' height='30px' />
        </a>
        <br />
        LIVE WEBSITE:
        <a href={live} target="_blank" rel="noreferrer">LIVE</a>
      </div>
      <div>
      <h2>{title}</h2>
      <h3>{tech.join(', ')}</h3>
      <p>{description}</p>
      </div>
    </Card>
  )
}

export default ProjectCard
