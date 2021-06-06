import React, {useContext} from 'react'
import { StyledNav } from '../../styles/components'
import {Navigation} from '.'
import { MenuContext } from '../../context'

const DrawerMenu = ({site}) => {
    const {toggle} = useContext(MenuContext)
    console.log('toggle nav:' + toggle)

    return (
    <StyledNav menuToggle={toggle}>
        <Navigation data={site.navigation} navClass="site-nav-item" />
    </StyledNav>
    )
}

export default DrawerMenu