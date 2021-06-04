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

export const StyledHeader = styled.div`{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}`

// export const StyledHidenLogo = styled.div`{
//     border: ${({visible}) => visible ? '2px solid red;' : '2px solid blue;' }
//     margin-top: .5rem;
//     z-index: 2;
// }`

// export const StyledHidenNav = styled.div`{
//     display: flex;
// }`
// // transform: translate(0, 10vh);
// // transition: all 0.5s;

export const StyledError = styled.section`
display: flex;
img {
    width: 55%
}
@media (max-width: 768px) {
    flex-direction: column-reverse;
    img {
        width: 100%;
    }
}
`

export const StyledErrorContainer = styled.div`
display: flex;
flex-direction: column;
font-size: 2em;
h2 {
    font-size: 5rem;
    padding: 0 3rem .5rem 3rem;
}
a {
    text-decoration: none;
}
@media  (max-width: 768px) {
    justify-content: center;
    align-items: center;    
    h2 {
        font-size: 2.8rem;
    }
    font-size: 1.5em;
}
`
