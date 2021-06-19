import React, {useState, useEffect} from 'react'
import { PostCard } from '.'

const PostFeed = ({post}) => {

    const [feed, setFeed] = useState(post)
    const deleteItem = feed.shift()

    useEffect( () => {
        
        setFeed(feed)

        return (
            feed.unshift(deleteItem)
        )
    },[])

    return (
        feed.map(({ node }) => {               
            return (
              // The tag below includes the markup for each post - components/common/PostCard.js
              <PostCard key={node.id} post={node}/>
              )})
    )
}

export default PostFeed