import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'
import { StyledImage } from '../../styles/components'

const PostCard = ({ post }) => {
    const url = `/${post.slug}/`
    const readingTime = readingTimeHelper(post)

    return (
        <article className={`post-card `}>
                <StyledImage>
                    <Link to={url} className="post-card-image-link">
                        <img src={post.feature_image} className="post-card-image" alt='Feature Image' />
                    </Link>
                </StyledImage>
            <div className='post-card-content'>
                <Link to={url} className="post-card-content-link">
                    <header className="post-card-header">
                            {post.tags && <div className="post-card-tags"> <Tags post={post} visibility="public" autolink={false} /></div>}
                            {post.featured && <span>Featured</span>}
                            <h2 className="post-card-title">{post.title}</h2>
                        </header>
                    <section className="post-card-excerpt">{post.excerpt}</section>
                </Link>
                <footer className="post-card-footer">
                    <div className="post-card-footer-left">
                        <div className="post-card-avatar">
                            {post.primary_author.profile_image ?
                                <img className="author-profile-image" src={post.primary_author.profile_image} alt={post.primary_author.name}/> :
                                <img className="default-avatar" src="/images/icons/avatar.svg" alt={post.primary_author.name}/>
                            }
                        </div>
                        <span>{ post.primary_author.name }
                            <div className="post-card-footer-details">
                                <p>{post.published_at_pretty} - {readingTime}</p>
                            </div>
                        </span>
                    </div>
                </footer>
            </div>
        </article>
    )
}

PostCard.propTypes = {
    post: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        featured: PropTypes.bool,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            })
        ),
        excerpt: PropTypes.string.isRequired,
        primary_author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
}

export default PostCard
