/*console.log("Hello world")
// //reinitialize and redeclare
// var a;
// a=10;
// var a;
// a=20;
// //reinitialize
// let b=10;
// //let b;
// b=99;
// //canot redeclare or reinitialize
// const c=22;
// console.log(a);
// console.log(b);
// console.log(c);
var num=10;
var str="yash";
var bool=true;
var un;
var nu=null;
var big=488748387439n;
var symbol=Symbol('li');

console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof un);
console.log(typeof nu);
console.log(typeof big);
console.log(typeof symbol);

var arr=[1,2,3,4,5]
console.log(typeof arr);
console.log(arr);

var obj={
    name:"yash",
    dept:"DS"
}
console.log(obj);
console.log(typeof obj);*/
/*var a=5;
const result=(a%2==0) ? '${a} is even':'${a} is odd';
console.log(result);*/
/*var a=80;
const res=(a>90 && a<=100)?'A grade':(a>=80&&a<=90)?'B grade':(a>70&&a<80)?'c grade':'D grade';
console.log(res)*/
/*
var day=5;
switch(day){
    case 1:{
        console.log("sun");
        break;
    }
    case 2:{
        console.log("mon");
        break;
    }
    case 3:{
        console.log("tue");
        break;
    }
    case 4:{
        console.log("wed");
        break;
    }
    case 5:{
        console.log("thu");
        break;
    }
    case 6:{
        console.log("fri");
        break;
    }
    case 7:{
        console.log("sat");
        break;
    }
    default:{
        console.log("invalid day")
    }
}*/
/*
for(let i=0;i<=10;i++){
    console.log(i);
}
var num=1234;
var c=0;
while(num>0){
    c++;
    num=Math.floor(num/10);
}
console.log(c);*/
// var a=0;
// do{
//     console.log("Example");
// }while(a!==0);

//normal function
// function add(){
//     var a=10;
//     var b=20;
//     console.log(a+b);
// }
// add();
// //with parameter
// function add(a,b){
//     console.log(a+b);
// }
// add(10,20);
// //with return type
// function add(a,b){
//     return a+b;
// }
// var res=add(10,20);
// console.log(res);

//arrow function
// var add=()=>{
//     console.log("i am arrow fuction");
// }
// add();
// function add(a=0,b=0){
//     console.log(a+b);
// }
// add(10,20);
// var add =(a,b)=>{
//     return a+b;
// }
// console.log(add(10,30));
// var add=(a,b,demo)=>{
//     var c=a+b;
//     demo(c);
// }
// add(10,20,(res)=>{
//     console.log(res);
// })
// add(10,20(res)=>{
//     for(let i=1;i<=res;i++){
//         if(i%2==0){
//             console.log(i);
//         }
//     }
// })

//spread operator(...)(ES6)
// var arr=[1,2,3];
// var arr2=[...arr,4,5,6];
// console.log(arr);
// console.log(arr2);

//destructuring operator
// var[m1,m2,m3,m4]=[99,98,97,96];
// console.log(m1);
// console.log(m2);
// console.log(m3);
// console.log(m4);

// var{name,age,dept,con}={
//     name:"tvc",
//     age:20,
//     dept:["ds"],
//     con:{mobile:1234567890}
// }
// console.log(name);
// console.log(age);
// console.log(dept);
// console.log(con);

//for..in
// var arr=[10,20,30,40];
// for(let i in arr){
//     console.log(i,arr[i]);
// }
// var obj={
//     name:"tvc",
//     age:20,
//     isActive:true
// }
// for(let key in obj){
//     console.log(key,obj[key]);
// }
//forEach(es6)
// var arr=[10,20,30,40];
// for(let i in arr){
//     console.log(i,arr[i]);
// }
// arr .forEach((Val,index)=>{
//     console.log(Val,index);
// })

// var arr=[1,2,3,4]
// //map
// var double=arr.map((val)=>(val*2));
// console.log(double);
// //filter
// var even=arr.filter((val)=>(val%2===0));
// console.log(even);
// //reduce
// var total=arr.reduce((sum,val)=>(sum+val),0);
// console.log(total);

// var res=arr.map((val)=>val**2).filter((val)=>val%2===0).reduce((sum,val),(sum+val),0);
// console.log(res);

//hosting
//var a;
// console.log(a);
// var a=10;

// //for let & const hosting not possible
// add();
// function add(){
//     console.log(10+20);
// }

//scope
//global scope//var
// var a=20;//global scope
// if(true){
//     var b=10;//block scope
// }
// console.log(a);
// console.log(b);


//promise
// const promise =new Promise((resolve,reject)=>{
//     var success=true;
//     if(success){
//         resolve("task completed");
//     }
//     else{
//         reject("task not completed");
//     }
// })
// promise.then((message)=>{
//     console.log(message);
// }).catch((err)=>{
//     console.log(err);
// })

//setTimeout
// const promise =new Promise((resolve,reject)=>{
//     var success=true;
//     if(success){
//         setTimeout(()=>{
//              resolve("task completed");
//         },5000);
//     }
//     else{
//         reject("task not completed");
//     }
// })
// promise.then((message)=>{
//     console.log(message);
// }).catch((err)=>{
//     console.log(err);
// })

//setInterval
// var c=1;
// const IntervalCount =setInterval(()=>{
//     console.log(c);
//     c++;
//     if(c>5){
//         clearInterval(IntervalCount)
//     }
// },2000);

//fetch
// const getData=()=>{
//     return fetch("https://jsonplaceholder.typicode.com/users")
// }
// getData().then((res)=>res.json())
// .then ((data)=>console.log(data))
// .catch((err)=>console.log(err));

//async and await
const getData=async()=>{
    try{
       const res= await fetch("https://jsonplaceholder.typicode.com/users");
       const data=await res.json();
       console.log(data);
    }catch(err){
        console.log(err)
    }
}
getData();