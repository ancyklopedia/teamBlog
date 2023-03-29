import {useState, useEffect} from 'react'
import axios from "axios"
import { Typography, List } from "@mui/material"
import { AlbumsObj } from '../../helpers/interfaces'
import PhotoPage from '../PhotoPage/PhotoPage'

const AlbumPage = () => {
    const [albums, setAlbums]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/albums/1/photos")
        .then((response)=>{setAlbums(response.data)})
        .catch((err)=>console.error(err.message))
    }, [])

  return (
    <>
        <Typography variant="h4" sx={{my:"2rem", textAlign: "center", fontWeight:600, color:"#660066"}}> Gallery </Typography>
        <List>
            {albums.length !== 0 && albums.map((photo: AlbumsObj)=>{
                return <PhotoPage photo={photo} key={photo.id} />
            })}
        </List>
    </>
  )
}

export default AlbumPage