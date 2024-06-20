const express = require("express");

const app = express();
const users = require('./MOCK_DATA.json');
const PORT = 3000;
app.listen(PORT,() => console.log('Server Started'))
app.get("/api", (req , res) => {
   //res.json({"users": ["Taskname_Id","Taskname"]})
   const html =`
   <ul>
      <h3>Task List Stored in Json File</h3>
      ${users.map((user) => `<li>${user.id} ${user.Task_name}</li>`)}
   </ul>`
   return res.send(html);
})