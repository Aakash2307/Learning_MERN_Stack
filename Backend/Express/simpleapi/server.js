const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let todos = [
  { id: 1, title: "Learn backend", completed: false },
  { id: 2, title: "Test API with Postman", completed: false },
];

app.get("/api/todos", (req, res) => {
  res.json(todos);
});

app.post("/api/todos", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "title is required" });
  }

  const newTodo = {
    id: todos.length + 1,
    title,
    completed: false,
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});


app.delete("/api/todos/:id" , (req, res) =>{
    const todoId = parseInt(req.params.id);
    const index = todos.findIndex(t => t.id === todoId);

    if (index == -1){
        return res.status(404).json({error : "todo not found "})

    }

    todos.splice(index ,1 );
    res.json({message: " Todo deleted successfully "})

    
});

app.put("/api/todos/:id" , (req,res) =>{
    const todoId = parseInt(req.params.id)
    const {title , completed} = req.body;

    const todo = todos.find(t => t.id === todoId);
    if (!todo) {
        return res.status(404).json({error : "todo not found "})
    }


    if (title !== undefined) todo.title = title;
    if (completed !== undefined) todo.completed = completed;

    res.json(todo);
})



app.get("/", (req, res) => {
  res.send("this api is working bro");
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
