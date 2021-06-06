import React from 'react'
import PropTypes from 'prop-types'
import { Header, DrawerMenu } from '.'
import { Helmet } from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import { MenuProvider } from '../../context'
import '../../styles/app.css'

const DefaultLayout = ({ data, children, bodyClass}) => {
    const site = data.allGhostSettings.edges[0].node

    return (
        <>
            <Helmet>
                <html lang={site.lang} />
                <style type="text/css">{`${site.codeinjection_styles}`}</style>
                <body className={bodyClass} />
            </Helmet>

            <MenuProvider>
                <div className="viewport">

                <div className="viewport-top">
                    {/* The main header section on top of the screen */}
                    <Header site={site}/>
                    <DrawerMenu site={site}/>

                    <main className="site-main">
                        {/* All the main content gets inserted here, index.js, post.js */}
                        {children}
                    </main>

                </div>

                <div className="viewport-bottom">
                    {/* The footer at the very bottom of the screen */}
                    <footer className="site-foot">
                        <div className="site-foot-nav container">
                            <div className="site-foot-nav-left">
                                <Link to="/">{site.title}</Link> © 2021 &mdash; Publicado con <a className="site-foot-nav-item" href="https://ghost.org" target="_blank" rel="noopener noreferrer">Ghost </a>
                                y <a className="site-foot-nav-item" href="https://www.gatsbyjs.com/" target="_blank" rel="noopener noreferrer">Gatsby</a>
                            </div>
                        </div>
                    </footer>

                </div>
            </div>
            </MenuProvider>
        </>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        file: PropTypes.object,
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
}

const DefaultLayoutSettingsQuery = props => (
    <StaticQuery
        query={graphql`
            query GhostSettings {
                allGhostSettings {
                    edges {
                        node {
                            ...GhostSettingsFields
                        }
                    }
                }
                file(relativePath: {eq: "ghost-icon.png"}) {
                    childImageSharp {
                        fluid(maxWidth: 60) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}
        render={data => <DefaultLayout data={data} {...props} />}
    />
)

export default DefaultLayoutSettingsQuery
