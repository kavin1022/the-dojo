const BlogList = (props) => {
    return(
        <div className="BlogList">
            <h2>{props.title}</h2>
            {props.blogs.map((blog) => (
                <div className="blog-preview" key = {blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Hello {blog.author}</p>
                </div>
            ))}
            
        </div>
        
    )
}

export default BlogList