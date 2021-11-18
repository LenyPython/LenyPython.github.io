import styled from 'styled-components'

const Container = styled.div`

`

interface Props {
  imgs: string[]
}

const ImgDisplay: React.FC<Props> = ({ imgs }) => {
  return <Container>
  <p>helo</p>
  </Container>
}

export default ImgDisplay
