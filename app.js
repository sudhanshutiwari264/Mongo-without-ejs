const express = require(`express`);
const app = express() ;
const console = require('console');
const userModel = require('./usermodel');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/create", async (req, res) => {
  let createduser = await userModel.create({
    name:"Sudha",
    username:'tiwariji264',
    email:"sudha@gmail.com"
  });
  res.send(createduser);
});

app.get("/update", async (req, res) => {
  let updateduser = await userModel.findOneAndUpdate({username:"Harshi"},{name:"Harshita"},{new:true});
  res.send(updateduser);
});

app.get("/read", async (req, res) => {
  let users = await userModel.find();
  res.send(users);
});

app.get("/delete", async (req,res)=>{
  let users_deleted = await userModel.findOneAndDelete({name:"harshita"})
  console.log(`data being deleted of ${users_deleted.username}`);
  res.send(users_deleted);
});


app.listen(3000,(err) =>{
  if(err){ console.error(err)}
  else {console.log("Running sucessfuly")};
});
