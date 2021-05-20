import styled from 'styled-components'

export const StyledNav = styled.nav`
transform: ${({toggle}) => toggle ? 'translateX(0);' : 'translateX(-100%);'};
width: 82%;
position: absolute;
background-color: #001219;
z-index: 3;
height: 10%;
padding-top: .5em;
transition: all 0.5s linear;
`

// transform: translateX(-100%); 
// mi pana revísate transitions