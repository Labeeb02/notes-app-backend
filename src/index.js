const express = require('express')
require('./db/mongoose')
const userRouter=require('./routers/user')
const taskRouter=require('./routers/task')

const app = express()
const port = process.env.PORT

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
// app.use((req,res,next) => {
//     if(req.method==='GET'){
//         res.send('GET requests are disabled')
//     }
//     else{
//         next(); 
//     }
// }) 

// app.use((req,res,next) => {
//     res.status(503).send('Site is under maintenance')
// }) 

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => 
{ 
    console.log(`Server Up On port ${port}!`)
})

// const Task=require('./models/task')
// const User=require('./models/user')

// const main=async () => { 
// //     const task=await Task.findById('6291e87404ba41f97db8d47a')
// //     await task.populate('owner')
// //     console.log(task.owner);

//     const user=await User.findById('6291e8022eb1f180a9c6aff6')
//     await user.populate('tasks')
//     console.log(user.tasks);

// } 

// main()