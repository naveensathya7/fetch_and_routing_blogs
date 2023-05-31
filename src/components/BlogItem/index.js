// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, topic, title, imageUrl, avatarUrl, author} = blogData

  return (
    <Link to={`/blogs/${id}`} className="link-item">
      <div className="blog-item-container">
        <img className="item-image" src={imageUrl} alt={topic} />
        <div className="details-section">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="author-section">
            <img className="avatar-image" src={avatarUrl} alt="avatar" />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
