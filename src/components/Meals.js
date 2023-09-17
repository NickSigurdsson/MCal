import { TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react';


function Meals () {
    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState('');
  
    const handleTaskTextChange = (event) => {
      setTaskText(event.target.value);
    };
  
    const addTask = () => {
      if (taskText.trim() !== '') {
        setTasks([...tasks, taskText]);
        setTaskText('');
      }
    };
  
    const deleteTask = (index) => {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    };
  
    return (
      <div>
        <h1>To-Do List</h1>
        <TextField
          label="New Task"
          variant="outlined"
          fullWidth
          value={taskText}
          onChange={handleTaskTextChange}
        />
        <Button variant="contained" color="primary" onClick={addTask}>
          Add Task
        </Button>
        <List>
          {tasks.map((task, index) => (
            <ListItem key={index}>
              <ListItemText primary={task} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={() => deleteTask(index)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }

export default Meals;
