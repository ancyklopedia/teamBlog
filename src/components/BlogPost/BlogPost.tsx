import React from 'react'
import { BlogProps } from '../../helpers/interfaces'
import { ListItem, ListItemText, Card } from "@mui/material";

const BlogPost:React.FC<BlogProps> = ({post}) => {
  return (
    <ListItem sx={{display:"inline", width:"100%"}}>
      <Card sx={{boxShadow:5, mx:"1rem", p:"0.8rem", backgroundColor:"#E3E7E6"}}> 
        <ListItemText sx={{textDecoration:"underline", fontStyle:"italic"}}>{post.title}</ListItemText>
        <span style={{fontSize:"0.8rem"}}> {post.body}</span>
      </Card>
    </ListItem>
  )
}

export default BlogPost