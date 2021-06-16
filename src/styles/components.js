import styled from 'styled-components'

export const StyledNav = styled.div`
transform: ${({menuToggle}) => menuToggle ? 'translateY(0%);' : 'translateY(-101%);'}
width: 100vw;
height: 100%;
position: fixed;
background-color: #111111;
z-index: 3;
padding-top: .5em;
transition: all 0.5s linear;
opacity: 0.9;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 2em;
`
// transform: translateX(-100%); 
// mi pana revísate transitions

export const StyledHeader = styled.div`{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}`

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

export const StyledImage = styled.div`
width: auto;
height: 100%;
`

export const StyledPortrait = styled.section`
margin: 6em 0 0 0;
border-bottom: 1px solid #e9eef1;
display: flex;
padding: 0 10px 30px;

@media  (max-width: 768px) {
    flex-direction: column;
}
`
export const StyledImagePortrait = styled.div`
width: 67%;
a {
    img {
        height: auto;
    }
}

@media (max-width: 768px) {
    width: 100%;
    a {
        img {
            height: 200px;
        }
    }
}
`
export const StyledContent = styled.div`
margin-left: 30px;
justify-content: center;
display: flex;
flex-direction: column;
a {
    header {
        h2 {
            font-size: 3rem;
        }
    }
    section {
        2rem;
    }
}

@media (max-width: 620px) {
    margin-left: 0;
    a {
        header {
            h2 {
                font-size: 1.8rem;
            }
        }
    }
}
`