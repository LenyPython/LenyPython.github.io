import styled from 'styled-components'

const NavBtn = styled.button`
    cursor: pointer;
    height: var(--nav-height);
    background: var(--main-font-color);
    color: var(--main-background-color);
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    border: none;
    border-radius: .3em;
    padding: .3em .6em;
    margin-right: 1em;
    transform: translateY(100%);
    transition: all .5s .3s;
    &.invisible {
      background: var(--main-containers-color);
      color: var(--main-font-color);
      transform: unset;
    }
`

export default NavBtn
