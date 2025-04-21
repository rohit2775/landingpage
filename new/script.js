
// function sumCallback(a, b, callback){
//     callback (a + b) 
// }
// function handlesum (sum){
//     console.log(sum)
// }
// sumCallback (2, 3, handlesum)


// function greet (name){
//     console.log("hello"+name +"!")

// }
// function callfunction(fn,value){
//     fn(value)

// }
// callfunction(greet,"rohit")



// function printname (name, fnc){
//     fnc("hello "+ name)
// }
// printname("rohit",function(variable){  // anonymous function 
//     console.log(variable)
// })



// function printname( name){
//     console.log(name)
// }

// let printnamearrow = (name) => {
//     console.log(name)
// }
// printnamearrow("rahul")
// console.log()


// const sum = (a,b)=> {
//     return a+b
// }

// console.log( sum(3,5))


// let NAME = name => name 

// console.log(NAME("rohit"))


// let printname = name=> "hi "+ name

// console.log(printname("rohit"))

//  function creategreeting (variable){
//     return function func (name){

//         console.log(variable)
//         console.log(variable + name)
//     }
//  }
//  let a = creategreeting("hello")
//  a("rohit")


// let a = [1,2,4,5,7,8,0]
// // console.log(a[2])

// // console.log(a.length)
// a.push(["rohit","rahul"])
// a.push(11)

// console.log(a[7][1])
  
// let a = ["a","b","c","d","e","f","g","h","i","j"]

// console.log(a[5])

// const a = [
//     [1,2,3,4,5],
//     [6,7,8,9],
//     [10,11,12,13,14]
// ]
// console.log(a[0][3])
// console.log(a[1][2])
// console.log(a[2][1])



//  let car = {
//     make : "tata",
//     model : 2023,
//     isUsed : true,

//     makeNoise : function (){
//         console.log("vroom...")
//     }
//  }

//  car.makeNoise()
//  console.log(car["make"])
//  console.log(car.make)



//  let book = {
//     Title : "roses are red ",
//     author :{
//         name : "rohit ",
//         age : 26,
//     }

//  }
//  book.year = 2025
// console.log(book)


// const a = [1,2,3,4,5]

// let b = a.find((number)=>{

//     return number>2
// })

 
// let a = "rohit"
// let b = "gorai "

// console.log(`${a} ${b}`)



// function Car (name , color){
//      this.name = name 
//      this.color = color
//      this.drive = function(){
//         console.log(this.name + " "+  "is driving ....")

//      }
// }

// const car1 = new Car("tata", "red") 
// const car2 = new Car("mahindra", "black") 

// car1.drive()

// console.log(car1)


// function Book (title ,author ){
//     this.title = title
//     this.author = author

// }

// const book1 = new Book("javascript","rohit gorai")

// console.log(book1)

// console.log(window)

