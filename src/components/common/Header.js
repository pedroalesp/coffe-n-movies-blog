import React, {useEffect, useState} from 'react'
import {Link} from 'gatsby'
import { Navigation } from '.'
import useReactSimpleMatchMedia from 'react-simple-matchmedia'
import '../../styles/app.css'

const Header = ({site}) => {
    const [match, setMatch] = useState(false)
    const matched = useReactSimpleMatchMedia('(max-width: 620px)')

    useEffect( () => {
        setMatch(matched)
    }, [])

    return (
        <header className="site-head" style={{ ...site.cover_image && { backgroundImage: `url(${site.cover_image})` } }}>
        <div className="container">

            {
                match ? (
                    <p>epa</p>
                ) : (
                    <div className="site-mast">
                    <div className="site-mast-left">
                        <Link to="/">
                                <img className="site-logo" src={site.logo} alt={site.title} />
                        </Link>
                    </div>
                    <div className="site-mast-right">
                        <Navigation data={site.navigation}/>
                    </div>
                </div>
                )
            }

        </div>
    </header>
    )
}

export default Header