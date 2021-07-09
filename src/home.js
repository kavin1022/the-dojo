import { useState, useEffect } from "react"
import useFetch from "./useFetch";
import BlogList from "./BlogList";
{/* npx json-server --watch data/data.json --port 8000 */}

const Home = () =>{

    const {data: blogs, loadingMessage, error} = useFetch("http://localhost:8000/blogs");


    return(
        <div className="home">
            {loadingMessage && <div>Loading...</div>}
            {error != null && <div>{error}</div>}
            {blogs && <BlogList blogs={blogs} title="Ha! this is the dojo"/>}
        </div>
    )
}

export default Home;
