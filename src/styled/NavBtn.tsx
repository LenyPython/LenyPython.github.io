import styled from 'styled-components'



const NavBtn = styled.button`
    cursor: pointer;
    background: var(--main-containers-color);
    color: var(--main-font-color);
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    border: none;
    border-radius: .3em;
    padding: .3em .6em;
    box-shadow: var(--main-shadow);
    margin-right: 1em;
    &:hover {
      transition: all .5s;
      background: var(--main-font-color);
      color: var(--main-background-color);
      box-shadow: none;
    }
`

export default NavBtn
