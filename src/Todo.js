import React, { useState } from "react";
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';

const Todo = () => {
          const [value, setValue] = useState('')
          const [item, setItem] = useState([])
          const [updateBtn, isUdateBtn] = useState(false);

          const handleAdd = () => {
                    let obj = { text: '', id: null }
                    let id = Math.random()
                    obj = {
                              text: value,
                              id: id
                    }
                    setItem([...item, obj])
                    setValue('')
          }

          const handleDelete = (a) => {
                    let newArr = item.filter((obj) => obj.id !== a.id)
                    setItem(newArr)
          }

          const handleDeleteAll = () => {
                    setItem([])
          }

          const handleUpdate = () => {
                    handleAdd()
                    isUdateBtn(false)
          }

          return (
                    <div>
                              <div>
                                        <TextField
                                                  id="standard-basic"
                                                  label="Todo..."
                                                  type='text'
                                                  value={value}
                                                  onChange={(e) => setValue(e.target.value)} />

{ updateBtn ?                           <Button variant="contained" color="primary" onClick={handleUpdate}>
                                                  UPDATE
                                        </Button> : <div><Button variant="contained" color="primary" onClick={handleAdd}>
                                                  ADD
                                        </Button>
                                        <Button variant="contained" color="secondary" onClick={handleDeleteAll}>
                                                  DELETE ALL
                                        </Button>
                                        </div>
}
                                        <br />
                              </div>
                              {/* LIST */}

{item.map(a => (
<div key={a.id}>
<List>
<ListItem>
<ListItemText
primary={a.text}
/>
<ListItemSecondaryAction>

<IconButton className='buttons' edge="end" aria-label="delete">
<DeleteIcon color="secondary" onClick={() => handleDelete(a)} />
</IconButton>

<IconButton className='buttons' edge="end" aria-label="create">
<CreateIcon onClick={() => {
                                         setValue(a.text) 
                                         isUdateBtn(true)
                                         handleDelete(a)
                                        }} />                                    
</IconButton>

</ListItemSecondaryAction>

</ListItem>

</List>

</div>
))}

                    </div>
          );
}

export default Todo;