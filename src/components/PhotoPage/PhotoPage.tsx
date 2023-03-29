import React from 'react'
import { ListItem, ListItemText, Card } from "@mui/material";
import { AlbumsProps } from '../../helpers/interfaces'

const PhotoPage:React.FC<AlbumsProps> = ({photo}) => {
  return (
    <ListItem sx={{display:"flex", justifyContent:"center"}}>
      <Card sx={{boxShadow:5, m:"0.5rem", p:"0.5rem", backgroundColor:"#E3E7E6", width: "150px"}}>
      <ListItemText primary={photo.title} sx={{fontStyle:"italic"}}/>
      <a href={photo.url}>
        <img src={photo.thumbnailUrl}></img>
      </a>
      </Card>
    </ListItem>
  )
}

export default PhotoPage