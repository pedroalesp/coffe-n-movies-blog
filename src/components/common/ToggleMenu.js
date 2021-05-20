import React, {useState} from 'react'
import useReactSimpleMatchMedia from 'react-simple-matchmedia'
import menu from '../../images/menu-icon.png'
import {Navigation} from '.'
import {StyledNav} from '../../styles/components'

const ToggleMenu = ({site}) => {

    const [open, setOpen] = useState(false)
    const matched = useReactSimpleMatchMedia('(max-width: 780px)')

    return (
    <>  
        <StyledNav toggle={open}>
            <Navigation data={site.navigation} navClass="site-nav-item" />
        </StyledNav>

        {matched 
        ? ( <small  onClick={() => setOpen(!open)}>
                <img src={menu} className='site-menu' alt='menu' />
            </small> )
        : ( <nav className="site-nav">
                 <div className="site-nav-left">
                     <Navigation data={site.navigation} navClass="site-nav-item" />
                </div>
            </nav>)}
    </>
    )
}

export default ToggleMenu