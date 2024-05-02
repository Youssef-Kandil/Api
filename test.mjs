
import { config } from 'dotenv';
config();
console.log(process.env.key);





fetch("http://192.168.1.15:8088/Categories")
.then(res=>res.json())
.then((res)=>console.log(res));

// fetch("http://192.168.1.15:8080/report",{
//     method:'POST',
//     headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         empID : "9008",
//     })
// }).then(res=>console.log(res));


// fetch("http://192.168.1.15:8080/Players",{
//     method:'DELETE',
//     headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         id : "7"
//     })
// }).then(res => console.log(res.json()))

// fetch("http://192.168.1.15:8080/Players",{
//     method:'PUT',
//     headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         id : "8",
//         startDate:"2024-11-02",
//         endDate :"2025-11-02"
//     })
// }).then(res => console.log(res.json()))
// console.log(process.env.React);


//Oraginal
console.log("Oraginal :");
console.log(new Date());
console.log("Oraginal 2 :");
console.log(new Date().toISOString());
console.log(new Date().toDateString());
// One Day
console.log("One Day :");
console.log(new Date(new Date(new Date()).getTime() + 60 * 60 * 24 * 1000));
// 15 Days
console.log("15 Day :");
console.log(new Date(new Date(new Date()).getTime() + 60 * 60 * 360 * 1000));
// Month
console.log("Month :");
console.log(new Date(new Date(new Date()).getTime() + 60 * 60 * 720 * 1000));
// 6 Months
console.log("6 Month :");
console.log(new Date(new Date(new Date()).getTime() + 60 * 60 * 4320 * 1000));
// Year
console.log("Year :");
console.log(new Date(new Date(new Date()).getTime() + 60 * 60 * 8640 * 1000));

//5 Days after Sub Time


// DEF DATES
// const def = new Date(new Date(new Date()).getTime() + 60 * 60 * 720 * 1000).getTime() - new Date().getTime()
const def = new Date('11/25/2022').getTime() - new Date().getTime()

console.log(" is DEF > 0 ===> ",(def/1000/60/60/24) > 0);
console.log("DEF is  => ",(def/1000/60/60/24)," DAYES");
