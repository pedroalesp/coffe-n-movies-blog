import React, {useEffect, useState, useContext} from 'react'
import {Link} from 'gatsby'
import { Navigation } from '.'
import menu from '../../images/menu-icon.png'
import useReactSimpleMatchMedia from 'react-simple-matchmedia'
import { MenuContext } from '../../context'
import '../../styles/app.css'

const Header = ({site}) => {
    const [match, setMatch] = useState(true)
    const matched = useReactSimpleMatchMedia('(max-width: 620px)')
    const {actToggle, toggle} = useContext(MenuContext)

    useEffect( () => {
        setMatch(matched)
    }, [matched, toggle])

    const handleToggle = () => {
        actToggle()
    }
    return (
        <header className="site-head" style={{ ...site.cover_image && { backgroundImage: `url(${site.cover_image})` } }}>
            <div className="container">
                <div className="site-mast">
                <div className="site-mast-left">
                    <Link to="/">
                        <img className="site-logo" src={site.logo} alt={site.title} />
                    </Link>
                </div>

                  {match 
                  ? ( <small className={` ${toggle ? 'drawer-buttonOff' : ''}`} onClick={handleToggle}>
                          <img src={menu} className='site-menu' alt='menu' />
                      </small> )
                  : ( <div className="site-mast-right">
                            <Navigation data={site.navigation}/>
                      </div>
                        )}

                </div>
            </div>
    </header>
    )
}

export default Header