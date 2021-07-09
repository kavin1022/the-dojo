const BlogList = ({blogs, title}) => {
    return(
        <div className="BlogList">
            <h2>{title}</h2>
            {blogs.map((x) => (
                <div className="blog-preview" key = {x.id}>
                    <h2>{x.title}</h2>
                    <p>Hello {x.author}</p>
                </div>
            ))}
        </div>
        
    )
}

export default BlogList