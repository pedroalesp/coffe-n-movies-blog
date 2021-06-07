import React, {useContext} from 'react'
import { StyledNav } from '../../styles/components'
import {Navigation} from '.'
import { MenuContext } from '../../context'

const DrawerMenu = ({site}) => {
    const {toggle} = useContext(MenuContext)

    return (
    <StyledNav menuToggle={toggle}>
        <div className='close-menu-container'>
            <span role='img' aria-label='emoji'>❌</span>
        </div>
        <div className='nav-container'>
            <Navigation data={site.navigation} navClass="site-nav-item" />
        </div>
    </StyledNav>
    )
}

export default DrawerMenu