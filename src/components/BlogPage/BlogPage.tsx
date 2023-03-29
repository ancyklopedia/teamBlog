import { Typography, List } from "@mui/material"
import {useState, useEffect} from "react"
import axios from "axios"
import BlogPost from "../BlogPost/BlogPost"
import { BlogObj } from "../../helpers/interfaces"


const BlogPage=()=>{
    const [blogPosts,setBlogPosts] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{setBlogPosts(response.data)})
        .catch((err)=>{console.error(err.message)})
    },[])

    return (
        <>
            <Typography variant="h4" sx={{my:"2rem", textAlign: "center", fontWeight:600, color:"#660066"}}> Team Blog </Typography>
            <List> 
                {blogPosts.length !== 0 && blogPosts.map((post:BlogObj)=>{
                    return <BlogPost post={post} key={post.id} />})}
            </List>
        </>
    )
}

export default BlogPage