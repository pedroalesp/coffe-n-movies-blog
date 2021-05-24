import React from 'react'
import {Link} from 'gatsby'
import delorean from '../../images/delorean.png'
import {StyledError, StyledErrorContainer} from '../../styles/components'

const ErrorComponent =  () => {

    return (
        <StyledError>
            <img src={delorean} alt='Error 404' />
            <StyledErrorContainer>
                <h2>¿Te perdiste? Llegaste a un error 404</h2>
                <Link to='/'>
                    <span role='img' aria-label='emoji'>🔙</span> Mejor regresemos
                </Link>
            </StyledErrorContainer>
        </StyledError>
    )
}

export default ErrorComponent
