import React, {useEffect, useState} from 'react'
//import {Link} from 'gatsby'
import { Navigation } from '.'
import menu from '../../images/menu-icon.png'
import {StyledNav} from '../../styles/components'
import useReactSimpleMatchMedia from 'react-simple-matchmedia'
import '../../styles/app.css'

const Header = ({site}) => {
    const [match, setMatch] = useState(true)
    const [open, setOpen] = useState(false)
    const matched = useReactSimpleMatchMedia('(max-width: 620px)')

    useEffect( () => {
        setMatch(matched)
    }, [matched])

    return (
        <header className="site-head" style={{ ...site.cover_image && { backgroundImage: `url(${site.cover_image})` } }}>
            <div className="container">
                {/* <StyledNav toggle={open}>
                    <Navigation data={site.navigation} navClass="site-nav-item" />
                </StyledNav> */}

                  {match 
                  ? ( <small  onClick={() => setOpen(!open)}>
                          <img src={menu} className='site-menu' alt='menu' />
                      </small> )
                  : ( <nav className="site-nav">
                           <div className="site-nav-left">
                               <Navigation data={site.navigation} navClass="site-nav-item" />
                          </div>
                      </nav>)}


            </div>
    </header>
    )
}

export default Header