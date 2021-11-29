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
    margin: .1em .4em;
    transform: translateY(100%);
    transition: all .5s .3s;
    &.invisible {
      position: relative;
      background: var(--main-containers-color);
      color: var(--main-font-color);
      transform: unset;
    }
    @media(max-width: 600px){
        position: fixed;
        bottom: 0;
    }

`

export default NavBtn
