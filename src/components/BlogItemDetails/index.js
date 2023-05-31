// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updatedData = {
      content: data.content,
      id: data.id,
      author: data.author,
      title: data.title,

      avatarUrl: data.avatar_url,
      imageUrl: data.image_url,
    }

    this.setState({blogData: updatedData, isLoading: false})
  }

  renderBlogItemsData = () => {
    const {blogData} = this.state
    const {content, title, imageUrl, avatarUrl, author} = blogData

    return (
      <div className="bg-container">
        <h1 className="heading">{title}</h1>
        <div className="author-section">
          <img className="avatar-image" src={avatarUrl} alt="avatar" />
          <p className="author">{author}</p>
        </div>
        <img className="item-image1" src={imageUrl} alt={title} />
        <p className="content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogItemsData()
        )}
      </div>
    )
  }
}
export default BlogItemDetails
