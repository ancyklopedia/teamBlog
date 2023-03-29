import {useState, useEffect} from 'react'
import axios from 'axios'
import { Typography, List, ListItem, ListItemText, Card } from "@mui/material"
import RemoveDoneIcon from '@mui/icons-material/RemoveDone';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { TodoObj } from '../../helpers/interfaces';

const TodoPage = () => {
    const [todos, setTodos]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((response)=>{setTodos(response.data)})
        .catch((err)=>console.error(err.message))
    }, [])

  return (
    <> 
    <Typography  variant="h4" sx={{my:"2rem", textAlign: "center", fontWeight:600, color:"#660066"}}> Team todos </Typography>
    <List> {todos.map((todo:TodoObj)=>{
        return (
            <ListItem key={todo.id} sx={{mx:"1rem"}}>
                <span> {todo.completed ? <DoneAllIcon color="success"/> : <RemoveDoneIcon sx={{ color: "red" }} />} </span>
                <ListItemText sx={{mx:"1.5rem"}}>
                    {todo.title}
                </ListItemText>
            </ListItem>
        )
    })} </List>
    </>
  )
}

export default TodoPage