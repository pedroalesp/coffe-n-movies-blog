import React, {useContext} from 'react'
import { StyledNav } from '../../styles/components'
import {Navigation} from '.'
import { MenuContext } from '../../context'
import '../../styles/app.css'

const DrawerMenu = ({site}) => {
    const {toggle, actToggle} = useContext(MenuContext)

    const handleToggle = () => {
        actToggle()
    }

    return (
    <StyledNav menuToggle={toggle}>
        <div className='close-menu-container'  onClick={handleToggle}>
            <span role='img' aria-label='emoji'>❌</span>
        </div>
        <div className='nav-container'>
            <Navigation data={site.navigation} navClass="site-nav-item" />
        </div>
    </StyledNav>
    )
}

export default DrawerMenu