import styled from 'styled-components'
import ImgDisplay from '../ImgDisplay'
import {ReactComponent as GitHub} from '../../svg/github.svg'
import { ProjectDataInterface } from '../../types/Interfaces'

const Card = styled.div`
  display: flex;
  background: var(--main-background-color);
  justify-content: flex-start;
  padding: 2em;
  margin-bottom: .5em;
  border-radius: 15px;
  border: 2px solid var(--main-font-color);
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
  @media(max-width: 900px){
    flex-direction: column;
    align-items: center;
    h2 { font-size: 1.4rem; }
    h3 { font-size: .9rem; }
    p { font-size: .8rem; }
    & > div.code{
      margin: .5em;
      text-align: justify;
      flex-direction: row;
      align-items: center;
    }
  }
`

const ProjectCard: React.FC<ProjectDataInterface> = ({
  description, title, tech, images, code, live }) => {
  const techs = Array.from(tech)
  return (
    <Card>
      <div>
      <h2>{title}</h2>
      <h3>{techs.join(', ')}</h3>
      <p>{description}</p>
      </div>
      <ImgDisplay imgs={images} />
      <div className='code'>
        CODE: 
        <a href={code} target="_blank" rel="noreferrer">
          <GitHub width='30px' height='30px' />
        </a>
        {live?
          <>
            LIVE WEBSITE:
            <a href={live} target="_blank" rel="noreferrer">LIVE</a>
          </>
        :
          'No live app'

        }
      </div>
    </Card>
  )
}

export default ProjectCard
