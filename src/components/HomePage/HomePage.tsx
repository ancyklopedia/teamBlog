import React from "react"
import { Typography, Button, ButtonGroup } from "@mui/material";
import BookIcon from '@mui/icons-material/Book';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CollectionsIcon from '@mui/icons-material/Collections';
import AlbumPage from "../AlbumPage/AlbumPage";
import TodoPage from "..//TodoPage/TodoPage"
import BlogPage from "../BlogPage/BlogPage";

const HomePage = () =>{
    const today=new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const dayName=days[today.getDay()]
    const day=today.getDate() <10? `0${today.getDate()}` : today.getDate();
    const month=today.getMonth()+1 <10? `0${today.getMonth()+1}` : today.getMonth()+1;
    const year=today.getFullYear();

    return(
        <>
        <Typography variant="h2" sx={{my:2, textAlign: "center"}}> Hello Team! </Typography>
        <Typography variant="h5" sx={{textAlign: "center"}}> Today is {dayName}, {day}.{month}.{year} </Typography>

        <ButtonGroup variant="contained" size="large" color="secondary" sx={{display:"flex", flexDirection:"column", boxShadow:0, gap:2, my:4, textAlign: "center"}}>
            <a href="/blog">
                <Button startIcon={<BookIcon />} onClick={BlogPage}> Blog </Button>
            </a>
            <a href="/todos">
                <Button startIcon={<FormatListBulletedIcon />} onClick={TodoPage}> Todo List </Button>
            </a>
            <a href="/gallery">
                <Button startIcon={<CollectionsIcon />} onClick={AlbumPage}> Gallery </Button>
            </a>
        </ButtonGroup>
        </>
    )
}

export default HomePage