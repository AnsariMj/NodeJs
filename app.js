// console.log("Hello world!");
// console.log (1+2);
// const a =10;
// const b =20;

// const sum = a+b;
// console.log(sum);
// array
// const numbers = [10,20,30]
// console.log(numbers.length)
// const  person={
//     name: 'John',
//     age: 30
// }
// console.log (person.name)
//hello
// Hello world
const app = require("express")()

app.get("/", (req, res) => {
    // res.send("Hello world")
    res.json({
        MJ_Ansari: "Hello i am from HOME page"
        // status:200
        
    })
})

app.get("/contact", (req, res) => {
    // res.send("Hello ")
    res.json({
        status:300,
        Message:"MJ_Ansari"
    })
})
app.get("/about", (req, res) => {
    // res.send("Hello ")
    res.json({
        status:200,
        Message:"Ansari"
    })
})

app.listen(4000, (req, res) => {
    console.log("Nodejs is running on port 4000")
})