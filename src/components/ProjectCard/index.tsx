import styled from 'styled-components'
import ImgDisplay from '../ImgDisplay'
import { ProjectDataInterface } from '../../types/Interfaces'

const Card = styled.div`
  display: flex;
  background: var(--main-background-color);
  max-height: 350px;
  padding: 1em;
  border-radius: 15px;
  border: 2px solid var(--main-font-color);
  & > div{
    margin: auto .5em;
    text-align: justify;
    display: flex;
    flex-direction: column;
  }
`

const ProjectCard: React.FC<ProjectDataInterface> = ({ description, title, tech, images }) => {
  return (
    <Card>
      <ImgDisplay imgs={images} />
      <div>
      <h2>{title}</h2>
      <h3>{tech.join(', ')}</h3>
      <p>{description}</p>
      </div>
    </Card>
  )
}

export default ProjectCard
