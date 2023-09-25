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
        greet: "Hello"
    })
})
app.get("/contact", (req, res) => {
    res.send("Hello ")
})

app.listen(4000, (req, res) => {
    console.log("Nodejs is running on port 4000")
})