//console.log("hello world");   //typescript is a static language 

// console.log("hello world")
// let x : string= "esther"

// console.log(x)

// let y: number=10
// y= 10 + 2;
// console.log(y)

// let a:number=15;
// let b:number=15;

// let w=a+b
// console.log(w)

// let person :boolean| string| number =10;
// console.log(person)
// let data :any = 50;

// let jaji :null= null
// console.log(jaji)

// let me: undefined;
// console.log(me)

let names: (string|number|boolean|undefined|null)[]   = ["bose","finbar",12,true,undefined,null]
console.log
names[1] ="agbalaja"
console.log(names)

let sum: number[]=[3,6,9,12,]
console.log(sum.reduce((a,b) =>{
    return a+b
}))
let add : (number|string)[]=[3,6,9,12,"one"]
console.log(add.length)
//tupple 
let arr:[number,string]=[1,"people"]
console.log(arr)

let ob:{
    name:string,
    age:number,
    car:boolean,
    pagination:number,
    arr2:(number|string)[]
} = {
    name:"ayo",
    age:10,
    car: true,
    pagination:10,
    arr2:[12,"boy"]
}
console.log(ob)
let obj:{
    name:string,
    age:number,
    color:string
    score:number,

}={
    name:"joy",
    age:10,
    color:"blue",
    score:10
}
console.log(obj)
// console.log(obj.reduce((a,b)=> {
// return a +b 
// }))

//type
type child = {
    name : string,
    age:number,
    short:boolean
    color?: string|number
}
type siblings3={
    headsize:number;
}
let siblings : child|siblings3={
    name:"esther",
    age:10,
    short:false,
    color: "blue",
    headsize:13
}
let siblings2: child={
    name :"bola",
    age:10,
    short :true,
    color:"yellow"
}
console.log(siblings)
console.log(siblings2)

//interface 
interface myData{
    name:string;
    age:number;
    color:string
}
interface newthing extends myData{
    fruit:string
    variety:any[]
}

interface myData {
    height:number;
    name:string
    short:boolean;
}

let data: myData={
    name:"koya",
    age: 23,
    height:12,
    short:true,
    color:"red",
    fruit:"mango",
    variety:10
}
console.log(data)