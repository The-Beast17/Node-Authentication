const app = require("./src/app");
<<<<<<< HEAD
const connect  = require("./src/db/db")


connect();

app.listen(3000, ()=>{
    console.log("server is runnning on port 3000")
});


=======
const connect = require("./src/db/db");
connect();

app.listen(3000 , ()=>{
    console.log("server is running on port 3000")
});
>>>>>>> 776266add89b0001f15b3816f795fb1cfb151576
